type ParticipantStackProps = {
	participants: string[];
	size?: "sm" | "md";
	maxVisible?: number;
};

export function ParticipantStack({
	participants,
	maxVisible = 4,
	size = "sm",
}: ParticipantStackProps) {
	const visibleParticipants = participants.slice(0, maxVisible);
	const remainingCount = participants.length - visibleParticipants.length;
	const sizeClasses = {
		sm: "size-6 text-[10px] flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
		md: "size-9 text-xs flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground",
	};
	return (
		<div className="flex items-center gap-2">
			<div className="flex -space-x-1.5">
				{visibleParticipants.map((participant) => (
					<span key={participant} className={sizeClasses[size]}>
						{participant}
					</span>
				))}
				{remainingCount > 0 && (
					<span className={sizeClasses[size]}>+{remainingCount}</span>
				)}
			</div>
			<span className="text-xs text-muted-foreground">
				{participants.length}
			</span>
		</div>
	);
}
