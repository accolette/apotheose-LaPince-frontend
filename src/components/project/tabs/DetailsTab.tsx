import { CircleFadingArrowUpIcon, Plus, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ParticipantsCard } from "../ParticipantsCard";
import { ProjectDetailsForm } from "../ProjectDetailsForm";

export function DetailsTab() {
	const [isEditing, setIsEditing] = useState(false);

	function handleClick() {
		if (isEditing) {
			// TODO : appeler le PATCH
			console.log("Sauvegarde");
		}

		setIsEditing(!isEditing);
	}
	return (
		<div className="flex flex-col gap-6 md:flex-row">
			<div className="flex-1 space-y-6">
				<ProjectDetailsForm isEditing={isEditing} />
				<Button
					type="button"
					variant="outline"
					className="w-full border-dashed"
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
