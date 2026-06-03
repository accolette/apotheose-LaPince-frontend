import { useEffect, useState } from "react";
import { OperationsRow } from "@/components/project/OperationsRow";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useProjects } from "@/context/ProjectsContext";
import { apiGetOperations } from "@/services/api";
import type { IOperation } from "@/types/operations";

export function OperationsTable() {
	const { project } = useProjects();
	const [operations, setOperations] = useState<IOperation[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const projectId = project?.id;
		if (projectId === undefined) return;

		async function loadOperations(projectId: number) {
			setIsLoading(true);
			try {
				const data = await apiGetOperations(projectId);
				setOperations(data);
			} finally {
				setIsLoading(false);
			}
		}
		loadOperations(projectId);
	}, [project?.id]);

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className="overflow-hidden rounded-lg border border-border bg-card">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Description</TableHead>
						<TableHead className="hidden sm:table-cell">Date</TableHead>
						<TableHead className="hidden lg:table-cell">Payé par</TableHead>
						<TableHead className="hidden md:table-cell">
							Bénéficiaires
						</TableHead>
						<TableHead className="text-right">Montant</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{operations.map((operation) => (
						<OperationsRow key={operation.id} operation={operation} />
					))}
				</TableBody>

				<TableFooter>
					<TableRow>
						<TableCell colSpan={4} className="text-right">
							Total
						</TableCell>
						<TableCell className="text-right tabular-nums">798,50 €</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</section>
	);
}
