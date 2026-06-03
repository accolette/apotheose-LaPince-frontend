import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useProject } from "@/context/ProjectContext";
import type { ProjectType, UpdateProjectPayload } from "@/types/project";

type ProjectDetailsFormProps = {
	formData: UpdateProjectPayload;
	setFormData: Dispatch<SetStateAction<UpdateProjectPayload>>;
	isEditing: boolean;
};

export function ProjectDetailsForm({
	formData,
	setFormData,
	isEditing,
}: ProjectDetailsFormProps) {
	const { isLoading: isProjectLoading, project } = useProject();
	const hasBudget = Boolean(project?.budget);
	const isBudgetEnabled = Boolean(formData.budget?.amount);

	if (isProjectLoading || !project) {
		return <div>Loading...</div>;
	}
	return (
		<form
			className={`space-y-5 rounded-lg border bg-card p-6 ${
				isEditing ? "border-amber-400" : "border-border"
			}`}
		>
			<div className="space-y-2">
				<Label htmlFor="project-name">Nom du projet</Label>
				<Input
					id="project-name"
					value={formData.name ?? ""}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							name: e.target.value,
						}))
					}
					disabled={!isEditing}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="project-description">
					Description <span className="text-muted-foreground">(optionnel)</span>
				</Label>
				<Textarea
					id="project-description"
					value={formData.description ?? ""}
					onChange={(e) =>
						setFormData((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
					disabled={!isEditing}
				/>
			</div>

			<div className="space-y-2">
				<Label>Type</Label>
				<Select
					value={formData.type ?? project.type}
					onValueChange={(value) => {
						if (!value) return;

						setFormData((prev) => ({
							...prev,
							type: value,
						}));
					}}
					disabled={!isEditing}
				>
					<SelectTrigger>
						<SelectValue placeholder="Choisir un type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Voyage">Voyage</SelectItem>
						<SelectItem value="Maison_Coloc">Maison / Coloc</SelectItem>
						<SelectItem value="Anniversaire">Anniversaire</SelectItem>
						<SelectItem value="Repas_Sortie">Repas / Sortie</SelectItem>
						<SelectItem value="Pro_Travail">Pro / Travail</SelectItem>
						<SelectItem value="Autre">Autre</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="space-y-2">
				<Label htmlFor="project-budget">
					Budget global{" "}
					<span className="text-muted-foreground">(optionnel)</span>
				</Label>
				<div className="relative">
					<Input
						id="project-budget"
						type="number"
						disabled={!isEditing}
						value={formData.budget?.amount ?? ""}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								budget: {
									...prev.budget,
									id: prev.budget?.id ?? 0,
									amount: Number(e.target.value),
									limitCriteria: prev.budget?.limitCriteria ?? 80,
								},
							}))
						}
					/>
					<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
						€
					</span>
				</div>
			</div>

			<div className="space-y-3">
				<div className="flex items-center gap-2">
					<Switch
						id="budget-alert"
						checked={isBudgetEnabled}
						onCheckedChange={(checked) =>
							setFormData((prev) => ({
								...prev,
								budget: checked
									? {
											id: prev.budget?.id ?? 0,
											amount: prev.budget?.amount ?? 0,
											limitCriteria: prev.budget?.limitCriteria ?? 80,
										}
									: undefined,
							}))
						}
						disabled={!isEditing}
					/>
					<Label htmlFor="budget-alert">Activer un seuil d’alerte</Label>
				</div>
				{isBudgetEnabled && (
					<div className="flex items-center gap-3">
						<Slider
							disabled={!isEditing}
							max={100}
							step={1}
							value={[formData.budget?.limitCriteria ?? 80]}
							onValueChange={(value) =>
								setFormData((prev) => ({
									...prev,
									budget: {
										...prev.budget,
										id: prev.budget?.id ?? 0,
										amount: prev.budget?.amount ?? 0,
										limitCriteria: Array.isArray(value) ? value[0] : value,
									},
								}))
							}
						/>
						<span className="w-12 text-right text-xs font-medium tabular-nums">
							{formData.budget?.limitCriteria} %
						</span>
					</div>
				)}
			</div>
		</form>
	);
}
