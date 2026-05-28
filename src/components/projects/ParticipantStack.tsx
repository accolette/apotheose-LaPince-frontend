type ParticipantStackProps = {
	participants: string[];
	maxVisible?: number;
};

export function ParticipantStack({
	participants,
	maxVisible = 4,
}: ParticipantStackProps) {
	const visibleParticipants = participants.slice(0, maxVisible);
	const remainingCount = participants.length - visibleParticipants.length;
	return (
		<div className="flex items-center gap-2">
			<div className="flex -space-x-1.5">
				{visibleParticipants.map((participant) => (
					<span
						key={participant}
						className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium text-foreground"
					>
						{participant}
					</span>
				))}
				{remainingCount > 0 && (
					<span className="flex size-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium text-muted-foreground">
						+{remainingCount}
					</span>
				)}
			</div>
			<span className="text-xs text-muted-foreground">
				{participants.length}
			</span>
		</div>
	);
}
