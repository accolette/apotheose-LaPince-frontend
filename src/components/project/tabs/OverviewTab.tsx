import { BudgetOverview } from "@/components/project/BudgetOverview";
import { MyBudgets } from "@/components/project/MyBudgets";
import { BalanceCard } from "../BalanceCard";

export function OverviewTab() {
	return (
		<div className="flex flex-col gap-6 md:flex-row">
			<div className="flex-1 space-y-6">
				<BudgetOverview />
				<MyBudgets />
			</div>
			<div className="flex-1">
				<BalanceCard />
			</div>
		</div>
	);
}
