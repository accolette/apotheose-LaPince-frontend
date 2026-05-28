import { ConnectedHeader } from "@/components/layout/ConnectedHeader";
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
				<OverviewTab />
			</main>
		</>
	);
}
