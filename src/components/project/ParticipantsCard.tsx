import { Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProject } from "@/context/ProjectContext";
import type { IParticipant } from "@/types/project";

type ProjectParticipantsFormProps = {
	participantsFormData: IParticipant[];
	setParticipantsFormData: Dispatch<SetStateAction<IParticipant[]>>;
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

	// Removes a participant from the list by index
	function handleRemoveParticipant(index: number) {
		setParticipantsFormData((prev) => prev.filter((_, i) => i !== index));
	}

	// Adds an empty participant slot to the list
	function handleAddParticipant() {
		setParticipantsFormData((prev) => [
			...prev,
			{
				id: Date.now(),
				appUser: null,
				name: "",
			},
		]);
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
					{participantsFormData.map((participant, index) => (
						<li key={participant.id} className="flex items-center gap-2">
							<Input
								value={participant.name ?? ""}
								// Controlled input: every keystroke updates formData
								onChange={(e) =>
									setParticipantsFormData((prev) =>
										prev.map((p) =>
											p.id === participant.id
												? { ...p, name: e.target.value }
												: p,
										),
									)
								}
								className="flex-1"
								disabled={!isEditingParticipants}
							/>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="text-muted-foreground hover:text-destructive"
								onClick={() => handleRemoveParticipant(index)}
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
