import { useState } from "react";
import { ConnectedHeader } from "@/components/layout/ConnectedHeader";
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
				{isProjectModalOpen && (
					<div className="mt-6 rounded-lg border border-border bg-card p-6">
						Modal nouveau projet ouverte
						<button
							type="button"
							className="ml-4 rounded bg-red-500 px-3 py-1 text-sm text-white"
							onClick={() => setIsProjectModalOpen(false)}
						>
							Fermer
						</button>
					</div>
				)}
				<UserStats />
				<ProjectsTable />
			</main>
		</>
	);
}
