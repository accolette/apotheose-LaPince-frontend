import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProject } from "@/context/ProjectContext";

type ProjectParticipantsFormProps = {
	isEditingParticipants: boolean;
};

export function ParticipantsCard({
	isEditingParticipants,
}: ProjectParticipantsFormProps) {
	const { isLoading: isProjectLoading, project } = useProject();
	// Wait until project data is available before rendering the form
	if (isProjectLoading || !project) {
		return <div>Loading...</div>;
	}
	// To have a better view of data provided by api
	const participants = project.projectParticipants.map((pp) => pp.participant);

	return (
		<div className="space-y-3">
			<div
				className={`space-y-5 rounded-lg border bg-card p-6 ${
					isEditingParticipants ? "border-amber-400" : "border-border"
				}`}
			>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-sm font-medium">Participants</h2>
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
