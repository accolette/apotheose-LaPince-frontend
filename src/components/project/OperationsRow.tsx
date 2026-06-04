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
import { getAvatarColor } from "@/utils/avatarColors";

type OperationsRowProps = {
	operation: IOperation;
	setSelectedOperation: (operation: IOperation | null) => void;
	setIsOperationDialogOpen: (open: boolean) => void;
};

const icons = [
	{ name: "Hébergement", icon: BedDouble },
	{ name: "Loisir", icon: Ticket },
	{ name: "Courses", icon: ShoppingBasket },
	{ name: "Divers", icon: Utensils },
	{ name: "Transport", icon: TrainFront },
	{ name: "Restauration", icon: Utensils },
];

export function OperationsRow({
	operation,
	setSelectedOperation,
	setIsOperationDialogOpen,
}: OperationsRowProps) {
	const { categories } = useCategories();
	const category = categories.find((cat) => cat.id === operation.categoryId);
	const Icon =
		icons.find((icon) => icon.name === category?.name)?.icon ?? BedDouble;
	const amount = Number(operation.amount);

	function openOperationDialog() {
		setSelectedOperation(operation);
		setIsOperationDialogOpen(true);
	}

	return (
		<TableRow className="hover:bg-muted/50" onClick={openOperationDialog}>
			<TableCell>
				<div className="flex items-center gap-3">
					<span
						style={{ backgroundColor: category?.color ?? "#6b7280" }}
						className="inline-flex text-white size-8 shrink-0 items-center justify-center rounded-md text-primary-foreground"
					>
						<Icon className="size-4" />
					</span>
					<p className="font-medium">{operation.name}</p>
				</div>
			</TableCell>
			<TableCell className="hidden text-xs text-muted-foreground sm:table-cell">
				{new Date(operation.date).toLocaleDateString("fr-FR", {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
				})}
			</TableCell>
			<TableCell className="hidden lg:table-cell">
				<div className="flex items-center gap-2">
					<span
						className={`flex size-6 items-center justify-center rounded-full text-[10px] font-medium text-white ${getAvatarColor(operation.appUser.name)}`}
					>
						{operation.appUser.name.slice(0, 2).toUpperCase()}
					</span>
					<span className="text-xs">{operation.appUser.name}</span>
				</div>
			</TableCell>
			<TableCell className="hidden md:table-cell">
				<ParticipantStack participants={operation.operationParticipants} />
			</TableCell>
			<TableCell className="text-right font-medium tabular-nums">
				{amount.toLocaleString("fr-FR", {
					style: "currency",
					currency: "EUR",
				})}
			</TableCell>
		</TableRow>
	);
}
