import { useCallback, useEffect, useState } from "react";
import { OperationDialog } from "@/components/project/OperationDialog";
import { OperationsTable } from "@/components/project/OperationsTable";
import { TableFilters } from "@/components/project/TableFilters";
import { useProject } from "@/context/ProjectContext";
import { apiGetOperations } from "@/services/api";
import type { IOperation, IOperationDialogState } from "@/types/operations";
import { getAvatarColor } from "@/utils/avatarColors";

export function OperationTab() {
	const { project } = useProject();

	const [operations, setOperations] = useState<IOperation[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [, setErrorCode] = useState<number | null>(null);

	const [activeFilter, setActiveFilter] = useState("all");

	const [selectedOperation, setSelectedOperation] = useState<IOperation | null>(
		null,
	);

	const [operationDialogState, setOperationDialogState] =
		useState<IOperationDialogState | null>(null);

	const [isOperationDialogOpen, setIsOperationDialogOpen] = useState(false);

	// ── Chargement des opérations ─────────────────────────────

	useEffect(() => {
		if (!project?.id) return;

		const projectId = project.id;

		async function loadOperations() {
			setIsLoading(true);
			setError(null);
			setErrorCode(null);

			try {
				const data = await apiGetOperations(projectId);
				setOperations(data);
			} catch (err) {
				setOperations([]);

				setError(
					err instanceof Error
						? err.message
						: "Erreur lors du chargement des opérations",
				);
			} finally {
				setIsLoading(false);
			}
		}

		loadOperations();
	}, [project?.id]);

	// ── Total opérations ──────────────────────────────────────

	const buildDialogParticipants = useCallback(
		(operation: IOperation | null = null) => {
			if (!project) return [];
			return project.projectParticipants.map((projectParticipant) => {
				const participant = projectParticipant.participant;
				const operationParticipant = operation?.operationParticipants.find(
					(opParticipant) => opParticipant.participant.id === participant.id,
				);
				return {
					participantId: participant.id,
					name: participant.name,
					initials: participant.name.slice(0, 2).toUpperCase(),
					avatarColor: getAvatarColor(participant.name),
					isSelected: Boolean(operationParticipant),
					repartitionAmount: operationParticipant?.repartitionAmount
						? String(operationParticipant.repartitionAmount)
						: "",
				};
			});
		},
		[project],
	);

	// ── Préparation modale édition ────────────────────────────

	useEffect(() => {
		if (!selectedOperation || !project) return;

		setOperationDialogState({
			mode: "edit",
			operationId: selectedOperation.id,
			name: selectedOperation.name,
			amount: selectedOperation.amount,
			categoryId: selectedOperation.categoryId,
			date: selectedOperation.date.slice(0, 10),
			payerParticipantId: selectedOperation.payerParticipantId,
			participants: buildDialogParticipants(selectedOperation),
		});
	}, [selectedOperation, project, buildDialogParticipants]);

	// ── Ouverture création ────────────────────────────────────

	function openCreateOperationDialog() {
		if (!project) return;

		setSelectedOperation(null);

		setOperationDialogState({
			mode: "create",
			operationId: null,
			name: "",
			amount: 0,
			categoryId: undefined,
			date: new Date().toISOString().slice(0, 10),
			payerParticipantId: undefined,
			participants: buildDialogParticipants(),
		});

		setIsOperationDialogOpen(true);
	}

	// ── Filtre (préparation future) ───────────────────────────

	const filteredOperations =
		activeFilter === "all"
			? operations
			: operations.filter(
					(operation) => String(operation.categoryId) === activeFilter,
				);

	return (
		<div className="space-y-4">
			<TableFilters
				options={[
					{ value: "all", label: "Toutes", count: 12 },
					{ value: "housing", label: "Hébergement", count: 3 },
					{ value: "transport", label: "Transport", count: 2 },
					{ value: "food", label: "Restauration", count: 4 },
					{ value: "activities", label: "Activités", count: 2 },
				]}
				activeValue={activeFilter}
				onValueChange={setActiveFilter}
				actionLabel="Nouvelle opération"
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
			/>
		</div>
	);
}
