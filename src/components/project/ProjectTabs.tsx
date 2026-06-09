import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DetailsTab } from "./tabs/DetailsTab";
import { OperationTab } from "./tabs/OperationTab";
import { OverviewTab } from "./tabs/OverviewTab";

type TabValue = "overview" | "details" | "expenses";

export function ProjectTabs() {
	const [activeTab, setActiveTab] = useState<TabValue>("overview");
	const [categoryFilter, setCategoryFilter] = useState<number | null>(null);

	function handleCategoryClick(categoryId: number) {
		console.log("categoryId cliqué :", categoryId);
		setCategoryFilter(categoryId);
		setActiveTab("expenses");
	}

	return (
		<Tabs
			value={activeTab}
			onValueChange={(v) => setActiveTab(v as TabValue)}
			className="pb-6"
		>
			<div className="mb-4 border-b">
				<TabsList variant="line">
					<TabsTrigger value="overview">Vue d’ensemble</TabsTrigger>
					<TabsTrigger value="details">Détails</TabsTrigger>
					<TabsTrigger value="expenses">Opérations</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="overview">
				<OverviewTab onCategoryClick={handleCategoryClick} />
			</TabsContent>

			<TabsContent value="details">
				<DetailsTab />
			</TabsContent>

			<TabsContent value="expenses">
				<OperationTab initialFilter={categoryFilter} />
			</TabsContent>
		</Tabs>
	);
}
