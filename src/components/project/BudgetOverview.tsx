import {
	BedDouble,
	ShoppingBasket,
	Tag,
	Ticket,
	TrainFront,
	Utensils,
} from "lucide-react";

const categories = [
	{
		name: "Hébergement",
		amount: "320 €",
		percent: 32,
		colorClass: "bg-blue-500",
		icon: BedDouble,
	},
	{
		name: "Transport",
		amount: "240 €",
		percent: 24,
		colorClass: "bg-violet-500",
		icon: TrainFront,
	},
	{
		name: "Restauration",
		amount: "128,40 €",
		percent: 12.84,
		colorClass: "bg-orange-500",
		icon: Utensils,
	},
	{
		name: "Activités",
		amount: "68 €",
		percent: 6.8,
		colorClass: "bg-pink-500",
		icon: Ticket,
	},
	{
		name: "Courses",
		amount: "42,10 €",
		percent: 4.21,
		colorClass: "bg-emerald-500",
		icon: ShoppingBasket,
	},
	{
		name: "Autre",
		amount: "48,60 €",
		percent: 4.86,
		colorClass: "bg-zinc-500",
		icon: Tag,
	},
];

export function BudgetOverview() {
	return (
		<div className="rounded-lg border border-border p-6 mb-6 bg-card">
			<div className="mb-2 flex items-baseline justify-between">
				<div className="flex items-baseline gap-2">
					<span className="text-2xl font-semibold tracking-tight tabular-nums">
						847,50 €
					</span>

					<span className="text-sm text-muted-foreground tabular-nums">
						/ 1 000 €
					</span>
				</div>

				<span className="text-xs font-medium text-muted-foreground">
					85% utilisé
				</span>
			</div>

			<div className="mb-4 flex h-2.5 overflow-hidden rounded-full bg-muted">
				{categories.map((category) => (
					<div
						key={category.name}
						className={category.colorClass}
						style={{ width: `${category.percent}%` }}
					/>
				))}
			</div>

			<div className="flex flex-wrap items-center gap-2">
				{categories.map((category) => {
					const Icon = category.icon;

					return (
						<span
							key={category.name}
							title={`${category.name} · ${category.amount}`}
							className={`flex size-8 cursor-help items-center justify-center rounded-md text-white ${category.colorClass}`}
						>
							<Icon className="size-4" />
						</span>
					);
				})}
			</div>
		</div>
	);
}
