import { CircleFadingArrowUpIcon, Plus, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { useProject } from "@/context/ProjectContext";
import type { UpdateProjectPayload } from "@/types/project";
import { ParticipantsCard } from "../ParticipantsCard";
import { ProjectDetailsForm } from "../ProjectDetailsForm";

export function DetailsTab() {
	const params = useParams();
	const projectId = Number(params.id);
	// Controls whether the form is editable or read-only
	const [isEditing, setIsEditing] = useState(false);
	// Access project data and update function from context
	const { updateProjectById, project } = useProject();

	// Local form state used by controlled inputs
	const [formData, setFormData] = useState<UpdateProjectPayload>({
		name: "",
		description: "",
		type: undefined,
	});

	useEffect(() => {
		// Wait until project data has been loaded
		if (!project) return;

		// Initialize form state from project data
		// This runs when the project is fetched or updated
		setFormData({
			name: project.name,
			description: project.description,
			type: project.type,
			budget: project.budget
				? {
						id: project.budget.id,
						amount: Number(project.budget.amount),
						limitCriteria: Number(project.budget.limitCriteria),
					}
				: undefined,
		});
	}, [project]);

	function handleClick() {
		// When already in edit mode:
		// save current form data before returning to read-only mode
		if (isEditing) {
			updateProjectById(projectId, formData);
		}

		// Toggle edit mode
		setIsEditing(!isEditing);
	}

	return (
		<div className="flex flex-col gap-6 md:flex-row">
			<div className="flex-1 space-y-6">
				<ProjectDetailsForm
					// Current form values
					formData={formData}
					// State updater passed to child component
					setFormData={setFormData}
					// Controls disabled/enabled state of inputs
					isEditing={isEditing}
				/>

				<Button
					type="button"
					variant="outline"
					className={`w-full border-dashed ${isEditing && "bg-yellow-400"}`}
					onClick={handleClick}
				>
					{isEditing ? (
						<>
							<Save className="size-4" />
							Sauvegarder
						</>
					) : (
						<>
							<CircleFadingArrowUpIcon className="size-4" />
							Modifier
						</>
					)}
				</Button>
			</div>

			{/* Participants section not yet connected */}
			{/* <div className="flex-1">
				<ParticipantsCard />
				<Button
					type="button"
					variant="outline"
					className="w-full border-dashed"
				>
					<Plus className="size-4" />
					Modifier
				</Button>
			</div> */}
		</div>
	);
}
