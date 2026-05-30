import { useEffect } from "react";
import { useParams } from "react-router";
import { ConnectedHeader } from "@/components/common/ConnectedHeader";
import { BudgetAlerts } from "@/components/project/BudgetAlerts";
import { ProjectHeading } from "@/components/project/ProjectHeading";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { DetailsTab } from "@/components/project/tabs/DetailsTab";
import { OperationTab } from "@/components/project/tabs/OperationTab";
import { OverviewTab } from "@/components/project/tabs/OverviewTab";
import { useProjects } from "@/context/ProjectsContext";

export function ProjectPage() {
	const params = useParams();
	const projectId = Number(params.id);
	const { isLoading, getProjectById, project } = useProjects();

	useEffect(() => {
		getProjectById(projectId);
	}, [projectId, getProjectById]);

	function RequireProject({ children }: { children: React.ReactNode }) {
		const { project, isLoading } = useProjects();

		if (isLoading || !project) {
			return <div>Loading...</div>;
		}

		return <>{children}</>;
	}

	console.log("page", project);
	return (
		<>
			<ConnectedHeader />
			<main className="mx-auto max-w-5xl px-6 py-10">
				<RequireProject>
					<ProjectHeading />
					{/* <ProjectTabs />
					<BudgetAlerts />
					<OverviewTab />
					<DetailsTab />
					<OperationTab /> */}
				</RequireProject>
			</main>
		</>
	);
}
