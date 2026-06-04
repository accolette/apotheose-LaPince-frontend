import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const participants = [
	{
		id: "1",
		name: "Steve",
		budget: 250,
	},
	{
		id: "2",
		name: "Alice",
		budget: 250,
	},
	{
		id: "3",
		name: "Bob",
		budget: 250,
	},
	{
		id: "4",
		name: "Chloé",
		budget: 250,
	},
];

export function ParticipantsCard() {
	type ProjectParticipantsFormProps = {
		isEditingParticipants: boolean;
	};

	return (
		<div className="space-y-3">
			<div className="rounded-lg border border-border bg-card p-6">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-sm font-medium">Participants</h2>

					<span className="mr-12 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
						Budget max
					</span>
				</div>

				<ul className="space-y-2">
					{participants.map((participant) => (
						<li key={participant.id} className="flex items-center gap-2">
							<Input defaultValue={participant.name} className="flex-1" />

							<div className="relative w-32 shrink-0">
								<Input
									type="number"
									defaultValue={participant.budget}
									className="pr-7 text-right tabular-nums"
								/>

								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									€
								</span>
							</div>

							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="text-muted-foreground hover:text-destructive"
							>
								<Trash2 className="size-4" />
							</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
