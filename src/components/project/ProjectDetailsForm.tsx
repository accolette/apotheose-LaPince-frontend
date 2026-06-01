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

export function ProjectDetailsForm() {
	return (
		<form className="space-y-5 rounded-lg border border-border bg-card p-6">
			<div className="space-y-2">
				<Label htmlFor="project-name">Nom du projet</Label>
				<Input id="project-name" defaultValue="Week-end à Lisbonne" />
			</div>

			<div className="space-y-2">
				<Label htmlFor="project-description">
					Description <span className="text-muted-foreground">(optionnel)</span>
				</Label>
				<Textarea
					id="project-description"
					defaultValue="3 jours entre amis à Lisbonne."
					rows={3}
				/>
			</div>

			{/* <div className="space-y-2">
				<Label>Type</Label>
				<Select defaultValue="travel">
					<SelectTrigger>
						<SelectValue placeholder="Choisir un type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="travel">Voyage</SelectItem>
						<SelectItem value="home">Maison / Coloc</SelectItem>
						<SelectItem value="birthday">Anniversaire</SelectItem>
						<SelectItem value="meal">Repas / Sortie</SelectItem>
						<SelectItem value="work">Pro / Travail</SelectItem>
						<SelectItem value="other">Autre</SelectItem>
					</SelectContent>
				</Select>
			</div> */}

			<div className="space-y-2">
				<Label htmlFor="project-budget">
					Budget global{" "}
					<span className="text-muted-foreground">(optionnel)</span>
				</Label>
				<div className="relative">
					<Input
						id="project-budget"
						type="number"
						defaultValue={1000}
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
					<Slider defaultValue={[80]} max={100} step={1} />
					<span className="w-12 text-right text-xs font-medium tabular-nums">
						80 %
					</span>
				</div>
			</div>
		</form>
	);
}
