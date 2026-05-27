import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectsHeadingProps = {
	onCreateProject: () => void;
};

export function ProjectsHeading({ onCreateProject }: ProjectsHeadingProps) {
	return (
		<div className="mb-8 flex items-end justify-between">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight">Les projets</h1>
				<p className="mt-1 text-sm text-muted-foreground">Bienvenue, Steve.</p>
			</div>
			<Button onClick={onCreateProject}>
				<Plus className="size-4" />
				Nouveau projet
			</Button>
		</div>
	);
}
