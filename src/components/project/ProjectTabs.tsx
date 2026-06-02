import { BalanceCard } from "@/components/project/BalanceCard";
import { BudgetOverview } from "@/components/project/BudgetOverview";
import { SpendingByCategory } from "@/components/project/SpendingByCategory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectTabs() {
	return (
		<Tabs defaultValue="overview" className="pb-6">
			<div className="mb-4 border-b">
				<TabsList variant="line">
					<TabsTrigger value="overview">Vue d’ensemble</TabsTrigger>
					<TabsTrigger value="details">Détails</TabsTrigger>
					<TabsTrigger value="expenses">Opérations</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="overview">
				<div className="flex flex-col gap-6 md:flex-row">
					<div className="flex-1 space-y-6">
						<BudgetOverview />
						<SpendingByCategory />
					</div>
					<div className="flex-1">
						<BalanceCard />
					</div>
				</div>
			</TabsContent>

			<TabsContent value="details">{/* DetailsTab — à venir */}</TabsContent>

			<TabsContent value="expenses">{/* OperationTab — à venir */}</TabsContent>
		</Tabs>
	);
}
