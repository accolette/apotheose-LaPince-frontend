import { useProjects } from "@/context/ProjectsContext";
import type IProject from "@/types/project";
import { ParticipantStack } from "../common/ParticipantStack";

export function ProjectHeading() {
	const { project } = useProjects();
	console.log("p datas", project.name);

	return (
		<div className="mb-8 flex items-end justify-between">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight">
					{project.name}
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					{project.description}
				</p>
			</div>
			<ParticipantStack
				projectParticipants={project.projectParticipants}
				size="md"
			/>
		</div>
	);
}
