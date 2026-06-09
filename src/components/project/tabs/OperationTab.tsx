import { useCallback, useEffect, useState } from "react";
import { OperationDialog } from "@/components/project/OperationDialog";
import { OperationsTable } from "@/components/project/OperationsTable";
import { TableFilters } from "@/components/project/TableFilters";
import { useCategories } from "@/context/CategoriesContext";
import { useProject } from "@/context/ProjectContext";
import { apiGetOperations } from "@/services/api";
import type {
	IOperation,
	IOperationDialogParticipant,
	IOperationDialogState,
} from "@/types/operations";
import type IProject from "@/types/project";
import { getAvatarColor } from "@/utils/avatarColors";
import { recalculateOperationState } from "@/utils/recalculateOperationState";

export function buildDialogParticipants(
	project: IProject,
	operation?: IOperation,
): IOperationDialogParticipant[] {
	return project.projectParticipants.flatMap((projectParticipant) => {
		const participant = projectParticipant.participant;
		if (participant?.id === undefined) {
			return [];
		}
		const operationParticipant = operation?.operationParticipants.find(
			(op) => op.participant.id === participant.id,
		);
		return [
			{
				participantId: participant.id,
				name: participant.name,
				initials: participant.name.slice(0, 2).toUpperCase(),
				avatarColor: getAvatarColor(participant.name),
				isSelected: Boolean(operationParticipant),
				isRepartitionAmountCalculated:
					operationParticipant?.isRepartitionAmountCalculated ?? true,
				repartitionAmount: operationParticipant?.repartitionAmount
					? String(operationParticipant.repartitionAmount)
					: "",
			},
		];
	});
}

export function OperationTab() {
	const { project } = useProject();
	const { categories } = useCategories();

	const [operations, setOperations] = useState<IOperation[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const [activeFilter, setActiveFilter] = useState<number | null>(null);

	const [selectedOperation, setSelectedOperation] = useState<IOperation | null>(
		null,
	);

	const categoriesWithCount = categories
		.map((cat) => ({
			...cat,
			count: operations.filter((op) => op.categoryId === cat.id).length,
		}))
		.filter((cat) => cat.count > 0); // ← exclure les catégories vides

	const [operationDialogState, setOperationDialogState] =
		useState<IOperationDialogState | null>(null);

	const [isOperationDialogOpen, setIsOperationDialogOpen] = useState(false);

	// ── Chargement des opérations ─────────────────────────────

	const loadOperations = useCallback(async () => {
		if (!project?.id) return;
		setIsLoading(true);
		setError(null);
		try {
			const data = await apiGetOperations(project.id);
			console.log("operations rechargées", data);
			setOperations(data);
		} catch (error) {
			console.error("Erreur apiGetOperations:", error);
			setError("Impossible de charger les opérations");
		} finally {
			setIsLoading(false);
		}
	}, [project?.id]);

	useEffect(() => {
		loadOperations();
	}, [loadOperations]);

	// ── Préparation modale édition ────────────────────────────

	useEffect(() => {
		if (!selectedOperation || !project) return;

		setOperationDialogState(
			recalculateOperationState({
				mode: "edit",
				projectId: project.id,
				operationId: selectedOperation.id,
				name: selectedOperation.name,
				amount: String(selectedOperation.amount),
				isAmountCalculated: selectedOperation.isAmountCalculated,
				categoryId: selectedOperation.categoryId,
				date: selectedOperation.date.slice(0, 10),
				isBalancedAmount: true,
				hasNegativeDistribution: false,
				payerParticipantId: selectedOperation.payerParticipantId,
				participants: buildDialogParticipants(project, selectedOperation),
			}),
		);
	}, [selectedOperation, project]);

	// ── Ouverture création ────────────────────────────────────

	function openCreateOperationDialog() {
		if (!project) return;

		setSelectedOperation(null);

		setOperationDialogState({
			mode: "create",
			projectId: project.id,
			operationId: null,
			name: "",
			amount: "",
			isAmountCalculated: true,
			categoryId: undefined,
			isBalancedAmount: true,
			hasNegativeDistribution: false,
			date: new Date().toISOString().slice(0, 10),
			payerParticipantId: undefined,
			participants: buildDialogParticipants(project),
		});

		setIsOperationDialogOpen(true);
	}

	// ── Filtre (préparation future) ───────────────────────────

	const filteredOperations = activeFilter
		? operations.filter((operation) => operation.categoryId === activeFilter)
		: operations;

	return (
		<div className="space-y-4">
			<TableFilters
				operations={filteredOperations}
				options={categoriesWithCount}
				activeValue={activeFilter}
				onValueChange={setActiveFilter}
				onActionClick={openCreateOperationDialog}
			/>

			<OperationsTable
				operations={filteredOperations}
				isLoading={isLoading}
				error={error}
				setSelectedOperation={setSelectedOperation}
				setIsOperationDialogOpen={setIsOperationDialogOpen}
			/>

			<OperationDialog
				open={isOperationDialogOpen}
				onOpenChange={setIsOperationDialogOpen}
				operationDialogState={operationDialogState}
				setOperationDialogState={setOperationDialogState}
				onOperationChanged={loadOperations}
			/>
		</div>
	);
}
