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
	const [isEditing, setIsEditing] = useState(false);
	const { updateProjectById, project } = useProject();
	const [formData, setFormData] = useState<UpdateProjectPayload>({
		name: "",
		description: "",
		type: undefined,
	});

	useEffect(() => {
		if (!project) return;

		setFormData({
			name: project.name,
			description: project.description,
			type: project.type,
			budget: project.budget
				? {
						id: project.budget.id,
						amount: project.budget.amount,
						limitCriteria: project.budget.limitCriteria,
					}
				: undefined,
		});
	}, [project]);

	function handleClick() {
		if (isEditing) {
			updateProjectById(projectId, formData);
			console.log("Sauvegarde");
		}

		setIsEditing(!isEditing);
	}
	return (
		<div className="flex flex-col gap-6 md:flex-row">
			<div className="flex-1 space-y-6">
				<ProjectDetailsForm
					formData={formData}
					setFormData={setFormData}
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
