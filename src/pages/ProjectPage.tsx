import { ConnectedHeader } from "@/components/layout/ConnectedHeader";
import { BudgetAlerts } from "@/components/project/BudgetAlerts";
import { DetailsTab } from "@/components/project/DetailsTab";
import { OperationTab } from "@/components/project/OperationTab";
import { OverviewTab } from "@/components/project/OverviewTab";
import { ProjectHeading } from "@/components/project/ProjectHeading";
import { ProjectTabs } from "@/components/project/ProjectTabs";

export function ProjectPage() {
	return (
		<>
			<ConnectedHeader />
			<main className="mx-auto max-w-5xl px-6 py-10">
				<ProjectHeading />
				<ProjectTabs />
				<BudgetAlerts />
				<OverviewTab />
				<DetailsTab />
				<OperationTab />
			</main>
		</>
	);
}
