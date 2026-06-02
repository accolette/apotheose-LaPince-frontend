import {
	BedDouble,
	ShoppingBasket,
	Ticket,
	TrainFront,
	Utensils,
} from "lucide-react";
import { ParticipantStack } from "@/components/common/ParticipantStack";
import { TableCell, TableRow } from "@/components/ui/table";
import { useCategories } from "@/context/CategoriesContext";
import type { IOperation } from "@/types/operations";

type OperationsRowProps = {
	operation: IOperation;
};

const icons = [
	{ name: "Hébergement", icon: BedDouble },
	{ name: "Loisir", icon: Ticket },
	{ name: "Courses", icon: ShoppingBasket },
	{ name: "Divers", icon: Utensils },
	{ name: "Transport", icon: TrainFront },
	{ name: "Restauration", icon: Utensils },
];

export function OperationsRow({ operation }: OperationsRowProps) {
	const { categories } = useCategories();
	const Icon =
		icons.find(
			(cat) =>
				cat.name ===
				categories.find((c) => c.id === operation.categoryId)?.name,
		)?.icon || BedDouble;
	const category = categories.find((cat) => cat.id === operation.categoryId);

	return (
		<TableRow>
			<TableCell>
				<div className="flex items-center gap-3">
					<span
						style={{ backgroundColor: category?.color }}
						className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-primary-foreground"
					>
						<Icon className="size-4" />
					</span>
					<p className="font-medium">{operation.name}</p>
				</div>
			</TableCell>

			<TableCell className="hidden text-xs text-muted-foreground sm:table-cell">
				{operation.date}
			</TableCell>

			<TableCell className="hidden lg:table-cell">
				<div className="flex items-center gap-2">
					<span className="flex size-6 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
						{operation.appUser.name.slice(0, 2).toUpperCase()}
					</span>
					<span className="text-xs">{operation.appUser.name} </span>
				</div>
			</TableCell>

			<TableCell className="hidden md:table-cell">
				<ParticipantStack
					projectParticipants={operation.operationParticipants}
				/>
			</TableCell>

			<TableCell className="text-right font-medium tabular-nums">
				{operation.amount} €
			</TableCell>
		</TableRow>
	);
}
