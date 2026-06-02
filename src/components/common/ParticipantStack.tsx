import type { IDashboardParticipant } from "@/types/project";

type ParticipantStackProps = {
	participants: IDashboardParticipant[];
	size?: "sm" | "md";
	maxVisible?: number;
};

export function ParticipantStack({
	participants = [],
	maxVisible = 3,
	size = "sm",
}: ParticipantStackProps) {
	const visible = participants.slice(0, maxVisible);
	const remaining = participants.length - visible.length;

	const sizeClasses = {
		sm: "size-6 text-[10px] flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
		md: "size-9 text-xs flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
	};

	return (
		<div className="flex items-center gap-2">
			<div className="flex -space-x-1.5">
				{visible.map((p) => (
					<span key={p.id} className={sizeClasses[size]}>
						{p.name.slice(0, 2).toUpperCase()}
					</span>
				))}
				{remaining > 0 && (
					<span className={sizeClasses[size]}>+{remaining}</span>
				)}
			</div>
			<span className="text-xs text-muted-foreground">
				{participants.length}
			</span>
		</div>
	);
}