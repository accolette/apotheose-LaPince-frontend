import { Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProject } from "@/context/ProjectContext";
import type { UpdateProjectPayload } from "@/types/project";

type ProjectParticipantsFormProps = {
	participantsFormData: UpdateProjectPayload;
	setParticipantsFormDat: Dispatch<SetStateAction<UpdateProjectPayload>>;
	isEditingParticipants: boolean;
};

export function ParticipantsCard({
	participantsFormData,
	setParticipantsFormData,
	isEditingParticipants,
}: ProjectParticipantsFormProps) {
	const { isLoading: isProjectLoading, project } = useProject();

	// Wait until project data is available before rendering the form
	if (isProjectLoading || !project) {
		return <div>Loading...</div>;
	}

	// To have a better view of data provided by api
	const participants = project.projectParticipants.map((pp) => pp.participant);

	// Adds an empty participant slot to the list
	function handleAddParticipant() {
		setParticipantsFormData((prev) => [...prev, { id: Date.now(), name: "" }]);
	}

	return (
		<div className="space-y-3">
			<div
				className={`space-y-5 rounded-lg border bg-card p-6 ${
					isEditingParticipants ? "border-amber-400" : "border-border"
				}`}
			>
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-sm font-medium">Participants</h2>
					<Button
						type="button"
						variant="ghost"
						size="sm"
						onClick={handleAddParticipant}
						disabled={!isEditingParticipants}
					>
						<Plus className="size-4" />
						Ajouter
					</Button>
				</div>

				<ul className="space-y-2">
					{participants.map((participant) => (
						<li key={participant.id} className="flex items-center gap-2">
							<Input
								defaultValue={participant.name}
								className="flex-1"
								disabled={!isEditingParticipants}
							/>
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
