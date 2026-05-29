import {
	type Expense,
	OperationsRow,
} from "@/components/project/OperationsRow";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const expenses: Expense[] = [
	{
		id: "1",
		description: "Dîner Time Out Market",
		date: "17 mai",
		paidBy: "Alice",
		paidByInitials: "AL",
		beneficiaries: ["SL", "AL", "BO", "CH"],
		amount: "128,40 €",
		category: "restauration",
	},
	{
		id: "2",
		description: "Airbnb 2 nuits",
		date: "16 mai",
		paidBy: "Steve",
		paidByInitials: "SL",
		beneficiaries: ["SL", "AL", "BO", "CH"],
		amount: "320,00 €",
		category: "hebergement",
	},
	{
		id: "3",
		description: "Train aller-retour",
		date: "16 mai",
		paidBy: "Bob",
		paidByInitials: "BO",
		beneficiaries: ["SL", "AL", "BO"],
		amount: "240,00 €",
		category: "transport",
	},
	{
		id: "4",
		description: "Courses petit-déjeuner",
		date: "17 mai",
		paidBy: "Chloé",
		paidByInitials: "CH",
		beneficiaries: ["SL", "AL", "BO", "CH"],
		amount: "42,10 €",
		category: "courses",
	},
	{
		id: "5",
		description: "Tickets musée + tram",
		date: "17 mai",
		paidBy: "Alice",
		paidByInitials: "AL",
		beneficiaries: ["AL", "BO"],
		amount: "68,00 €",
		category: "activites",
	},
];

export function OperationsTable() {
	return (
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
					{expenses.map((operation) => (
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
