import type { LucideIcon } from "lucide-react";
import {
	BedDouble,
	ShoppingBasket,
	Tag,
	Ticket,
	TrainFront,
	Utensils,
} from "lucide-react";
import { useState } from "react";
import { BudgetDialog } from "@/components/project/BudgetDialog";
import type { BudgetSummary } from "@/types/budget";

const categoryIconMap: Record<string, LucideIcon> = {
	Divers: Tag,
	Restaurants: Utensils,
	Hébergement: BedDouble,
	Transport: TrainFront,
	Courses: ShoppingBasket,
	Loisir: Ticket,
};

const mockBudgetSummary: BudgetSummary = {
	totalSpent: 847.5,
	totalLimit: 1000,
	budgets: [
		{
			id: 1,
			categoryId: 1,
			categoryName: "Divers",
			color: "#A9A9A9",
			spent: 48.6,
			limit: 200,
			alertThreshold: 80,
		},
		{
			id: 2,
			categoryId: 2,
			categoryName: "Restaurants",
			color: "#228B22",
			spent: 128.4,
			limit: 150,
			alertThreshold: 80,
		},
		{
			id: 3,
			categoryId: 3,
			categoryName: "Hébergement",
			color: "#1E90FF",
			spent: 320,
			limit: 400,
			alertThreshold: 80,
		},
		{
			id: 4,
			categoryId: 4,
			categoryName: "Transport",
			color: "#FF8C00",
			spent: 240,
			limit: 250,
			alertThreshold: 80,
		},
		{
			id: 5,
			categoryId: 5,
			categoryName: "Courses",
			color: "#6B8E23",
			spent: 42.1,
			limit: 200,
			alertThreshold: 80,
		},
		{
			id: 6,
			categoryId: 6,
			categoryName: "Loisir",
			color: "#9370DB",
			spent: 68,
			limit: 400,
			alertThreshold: 80,
		},
	],
};

export function MyBudgets() {
	const [isBudgetDialogOpen, setIsBudgetDialogOpen] = useState(false);
	const { budgets } = mockBudgetSummary;
	return (
		<>
			<div className="rounded-lg border border-border bg-card p-6">
				<div className="mb-3 flex items-center justify-between">
					<h2 className="text-sm font-medium">Mes budgets</h2>
					<button
						type="button"
						onClick={() => setIsBudgetDialogOpen(true)}
						className="text-xs font-medium text-muted-foreground transition hover:text-foreground"
					>
						Modifier
					</button>
				</div>
				<ul className="space-y-3">
					{budgets.map((budget) => {
						const Icon = categoryIconMap[budget.categoryName] ?? Tag;
						return (
							<li key={budget.id} className="flex items-center gap-3 text-sm">
								<span
									className={`flex size-7 shrink-0 items-center justify-center rounded-md text-white`} //
									style={{ backgroundColor: budget.color }}
								>
									<Icon className="size-3.5" />
								</span>
								<span className="flex-1">{budget.categoryName}</span>
								<span className="tabular-nums text-muted-foreground">
									<span className="font-medium text-foreground">
										{budget.spent.toLocaleString("fr-FR", {
											style: "currency",
											currency: "EUR",
										})}
									</span>{" "}
									/{" "}
									{budget.limit.toLocaleString("fr-FR", {
										style: "currency",
										currency: "EUR",
									})}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
			<BudgetDialog
				open={isBudgetDialogOpen}
				onOpenChange={setIsBudgetDialogOpen}
			/>
		</>
	);
}
