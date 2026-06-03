import { useState } from "react";
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

export function ProjectDetailsForm() {
	const { isLoading: isProjectLoading, project } = useProject();
	const [alertThreshold, setAlertThreshold] = useState<number[]>([80]);

	if (isProjectLoading || !project) {
		return <div>Loading...</div>;
	}

	return (
		<form className="space-y-5 rounded-lg border border-border bg-card p-6">
			<div className="space-y-2">
				<Label htmlFor="project-name">Nom du projet</Label>
				<Input id="project-name" defaultValue={project.name} />
			</div>

			<div className="space-y-2">
				<Label htmlFor="project-description">
					Description <span className="text-muted-foreground">(optionnel)</span>
				</Label>
				<Textarea
					id="project-description"
					defaultValue={project.description}
					rows={3}
				/>
			</div>

			<div className="space-y-2">
				<Label>Type</Label>
				<Select defaultValue={project.type}>
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
						defaultValue={project.budget?.amount?.toString() ?? ""}
						className="pr-8"
					/>
					<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
						€
					</span>
				</div>
			</div>

			<div className="space-y-3">
				<div className="flex items-center gap-2">
					<Switch id="budget-alert" defaultChecked />
					<Label htmlFor="budget-alert">Activer un seuil d’alerte</Label>
				</div>

				<div className="flex items-center gap-3">
					<Slider
						value={alertThreshold}
						onValueChange={(value) => {
							setAlertThreshold(Array.isArray(value) ? [...value] : [value]);
						}}
						max={100}
						step={1}
					/>
					<span className="w-12 text-right text-xs font-medium tabular-nums">
						{alertThreshold[0]} %
					</span>
				</div>
			</div>
		</form>
	);
}
