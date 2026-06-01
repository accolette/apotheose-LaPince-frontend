import { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import { ConnectedHeader } from "@/components/common/ConnectedHeader";
import { BudgetAlerts } from "@/components/project/BudgetAlerts";
import { ProjectHeading } from "@/components/project/ProjectHeading";
import { ProjectTabs } from "@/components/project/ProjectTabs";
import { DetailsTab } from "@/components/project/tabs/DetailsTab";
import { OperationTab } from "@/components/project/tabs/OperationTab";
import { OverviewTab } from "@/components/project/tabs/OverviewTab";
import { useAuth } from "@/context/AuthContext";
import { useProjects } from "@/context/ProjectsContext";

export function ProjectPage() {
	const params = useParams();
	const projectId = Number(params.id);
	const {
		isLoading: isProjectLoading,
		getProjectById,
		project,
	} = useProjects();

	const { user, isLoading: isAuthLoading } = useAuth();

	useEffect(() => {
		if (user) {
			getProjectById(projectId);
		}
	}, [user, projectId, getProjectById]);

	if (isAuthLoading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	if (isProjectLoading || !project) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<ConnectedHeader />
			<main className="mx-auto max-w-5xl px-6 py-10">
				{isProjectLoading || !project ? (
					<div> Loading... </div>
				) : (
					<>
						<ProjectHeading project={project} />
						<ProjectTabs />
						{/*<BudgetAlerts />
						<OverviewTab />
						<DetailsTab />
						<OperationTab /> */}
					</>
				)}
			</main>
		</>
	);
}
