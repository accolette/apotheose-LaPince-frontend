import type { IOperationParticipant } from "@/types/operations";
import type { IProjectParticipants } from "@/types/project";

type ParticipantStackProps = {
	projectParticipants: IProjectParticipants[] | IOperationParticipant[];
	size?: "sm" | "md";
	maxVisible?: number;
};

export function ParticipantStack({
	projectParticipants,
	maxVisible = 3,
	size = "sm",
}: ParticipantStackProps) {
	// Guard temporaire — ProjectRow passe encore des string[] (données mockées)
	// TODO: retirer quand ProjectsTable sera branchée sur l'API (#111)
	if (!projectParticipants) return null;

	const visibleParticipants = projectParticipants.slice(0, maxVisible);

	const remainingCount =
		projectParticipants.length - visibleParticipants.length;
	const sizeClasses = {
		sm: "size-6 text-[10px] flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
		md: "size-9 text-xs flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
	};

	return (
		<div className="flex items-center gap-2">
			<div className="flex -space-x-1.5">
				{visibleParticipants.map((projectParticipants) => (
					<span
						key={projectParticipants.participant.name}
						className={sizeClasses[size]}
					>
						{projectParticipants.participant.name.slice(0, 2).toUpperCase()}
					</span>
				))}
				{remainingCount > 0 && (
					<span className={sizeClasses[size]}>+{remainingCount}</span>
				)}
			</div>
			<span className="text-xs text-muted-foreground">
				{projectParticipants.length}
			</span>
		</div>
	);
}
