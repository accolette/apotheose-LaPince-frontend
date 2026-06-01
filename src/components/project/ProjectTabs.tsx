import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
		</Tabs>
	);
}
