import type { LucideIcon } from "lucide-react";
import {
	BedDouble,
	ShoppingBasket,
	Tag,
	Ticket,
	TrainFront,
	Utensils,
} from "lucide-react";
import type { BudgetSummary } from "@/types/budget";

// Front-only map — category name → Lucide icon
const categoryIconMap: Record<string, LucideIcon> = {
	Divers: Tag,
	Restaurants: Utensils,
	Hébergement: BedDouble,
	Transport: TrainFront,
	Courses: ShoppingBasket,
	Loisir: Ticket,
};

// Mock — will be replaced by API data from ProjectsContext
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

export function BudgetOverview() {
	const { totalSpent, totalLimit, budgets } = mockBudgetSummary;
	const usedPercent = Math.round((totalSpent / totalLimit) * 100);

	return (
		<div className="rounded-lg border border-border p-6 mb-6 bg-card">
			<div className="mb-2 flex items-baseline justify-between">
				<div className="flex items-baseline gap-2">
					<span className="text-2xl font-semibold tracking-tight tabular-nums">
						{totalSpent.toLocaleString("fr-FR", {
							style: "currency",
							currency: "EUR",
						})}
					</span>

					<span className="text-sm text-muted-foreground tabular-nums">
						/{" "}
						{totalLimit.toLocaleString("fr-FR", {
							style: "currency",
							currency: "EUR",
						})}
					</span>
				</div>

				<span className="text-xs font-medium text-muted-foreground">
					{usedPercent}% utilisé
				</span>
			</div>

			<div className="mb-4 flex h-2.5 overflow-hidden rounded-full bg-muted">
				{budgets.map((budget) => (
					<div
						key={budget.id}
						style={{
							width: `${(budget.spent / totalLimit) * 100}%`,
							backgroundColor: budget.color,
						}}
					/>
				))}
			</div>

			<div className="flex flex-wrap items-center gap-2">
				{budgets.map((budget) => {
					const Icon = categoryIconMap[budget.categoryName] ?? Tag;

					return (
						<span
							key={budget.id}
							title={`${budget.categoryName} · ${budget.spent.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}`}
							className="flex size-8 cursor-help items-center justify-center rounded-md text-white"
							style={{ backgroundColor: budget.color }}
						>
							<Icon className="size-4" />
						</span>
					);
				})}
			</div>
		</div>
	);
}
