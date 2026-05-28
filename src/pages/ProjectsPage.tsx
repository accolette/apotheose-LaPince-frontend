import { useState } from "react";
import { ProjectDialog } from "@/components/common/ProjectDialog";
import { ConnectedHeader } from "@/components/common/ConnectedHeader";
import { ProjectsHeading } from "@/components/projects/ProjectsHeading";
import { ProjectsTable } from "@/components/projects/ProjectsTable";
import { UserStats } from "@/components/projects/UserStats";

export function ProjectsPage() {
	const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
	return (
		<>
			<ConnectedHeader />

			<main className="mx-auto max-w-5xl px-6 py-10">
				<ProjectsHeading onCreateProject={() => setIsProjectModalOpen(true)} />

				<UserStats />

				<ProjectsTable />
			</main>

			<ProjectDialog
				open={isProjectModalOpen}
				onOpenChange={setIsProjectModalOpen}
				title="Nouveau projet"
			/>
		</>
	);
}
