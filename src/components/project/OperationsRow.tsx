import {
	BedDouble,
	ShoppingBasket,
	Ticket,
	TrainFront,
	Utensils,
} from "lucide-react";
import { ParticipantStack } from "@/components/common/ParticipantStack";
import { TableCell, TableRow } from "@/components/ui/table";

type ExpenseCategory =
	| "hebergement"
	| "transport"
	| "restauration"
	| "activites"
	| "courses";

export type Expense = {
	id: string;
	description: string;
	date: string;
	paidBy: string;
	paidByInitials: string;
	beneficiaries: string[];
	amount: string;
	category: ExpenseCategory;
};

const categoryIcons = {
	hebergement: BedDouble,
	transport: TrainFront,
	restauration: Utensils,
	activites: Ticket,
	courses: ShoppingBasket,
};

export function OperationsRow({ operation }: { operation: Expense }) {
	const Icon = categoryIcons[operation.category];

	return (
		<TableRow>
			<TableCell>
				<div className="flex items-center gap-3">
					<span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
						<Icon className="size-4" />
					</span>
					<p className="font-medium">{operation.description}</p>
				</div>
			</TableCell>

			<TableCell className="hidden text-xs text-muted-foreground sm:table-cell">
				{operation.date}
			</TableCell>

			<TableCell className="hidden lg:table-cell">
				<div className="flex items-center gap-2">
					<span className="flex size-6 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
						{operation.paidByInitials}
					</span>
					<span className="text-xs">{operation.paidBy}</span>
				</div>
			</TableCell>

			<TableCell className="hidden md:table-cell">
				<ParticipantStack projectParticipants={[]} />
			</TableCell>

			<TableCell className="text-right font-medium tabular-nums">
				{operation.amount}
			</TableCell>
		</TableRow>
	);
}
