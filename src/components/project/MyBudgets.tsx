import { useState } from "react";

import { BedDouble, TrainFront, Utensils } from "lucide-react";

import { BudgetDialog } from "@/components/project/BudgetDialog";

const budgets = [

	{
		name: "Hébergement",
		spent: "320 €",
		limit: "400 €",
		icon: BedDouble,
		colorClass: "bg-blue-500",
	},
	{
		name: "Transport",
		spent: "240 €",
		limit: "250 €",
		icon: TrainFront,
		colorClass: "bg-violet-500",
	},
	{
		name: "Restauration",
		spent: "128,40 €",
		limit: "150 €",
		icon: Utensils,
		colorClass: "bg-orange-500",
	},

];

export function MyBudgets() {

	const [isBudgetDialogOpen, setIsBudgetDialogOpen] = useState(false);
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
						const Icon = budget.icon;
						return (
							<li
								key={budget.name}
								className="flex items-center gap-3 text-sm"
							>
								<span
									className={`flex size-7 shrink-0 items-center justify-center rounded-md text-white ${budget.colorClass}`}
								>
									<Icon className="size-3.5" />
								</span>
								<span className="flex-1">{budget.name}</span>
								<span className="tabular-nums text-muted-foreground">
									<span className="font-medium text-foreground">
										{budget.spent}
									</span>{" "}
									/ {budget.limit}
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