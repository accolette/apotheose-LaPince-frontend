import type IProject from "@/types/project";
import { ParticipantStack } from "../common/ParticipantStack";

interface ProjectHeadingProps {
	project: IProject;
}

export function ProjectHeading({ project }: ProjectHeadingProps) {
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
				participants={project.projectParticipants}
				size="md"
			/>
		</div>
	);
}
