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

type ProjectParticipantsFormProps = {
	isEditingParticipants: boolean;
};

export function ParticipantsCard({
	isEditingParticipants,
}: ProjectParticipantsFormProps) {
	return (
		<div className="space-y-3">
			<div
				className={`space-y-5 rounded-lg border bg-card p-6 ${
					isEditingParticipants ? "border-amber-400" : "border-border"
				}`}
			>
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
