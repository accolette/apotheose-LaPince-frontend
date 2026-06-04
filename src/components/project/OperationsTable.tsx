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
import { useProject } from "@/context/ProjectContext";
import { apiGetOperations } from "@/services/api";
import type { IOperation } from "@/types/operations";

type OperationsTableProps = {
	operations: IOperation[];
	isLoading: boolean;
	error: string | null;
	setSelectedOperation: (operation: IOperation | null) => void;
	setIsOperationDialogOpen: (open: boolean) => void;
};

export function OperationsTable({
	operations,
	isLoading,
	error,
	setSelectedOperation,
	setIsOperationDialogOpen,
}: OperationsTableProps) {
	const totalAmount = operations.reduce(
		(total, op) => total + Number(op.amount),
		0,
	);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<>
			<p>{operations.length} opérations</p>
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
							<OperationsRow
								key={operation.id}
								operation={operation}
								setSelectedOperation={setSelectedOperation}
								setIsOperationDialogOpen={setIsOperationDialogOpen}
							/>
						))}
					</TableBody>

					<TableFooter>
						<TableRow>
							<TableCell colSpan={4} className="text-right">
								Total
							</TableCell>
							<TableCell className="text-right tabular-nums">
								{totalAmount.toLocaleString("fr-FR", {
									style: "currency",
									currency: "EUR",
								})}
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</section>
		</>
	);
}
