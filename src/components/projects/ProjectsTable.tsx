import { ProjectRow } from "@/components/projects/ProjectRow";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { projects } from "@/types/project";

// todo pour la dynamisation de la table essayer d'utiliser tanstack query comme recommandé dans https://ui.shadcn.com/docs/components/base/data-table

export function ProjectsTable() {
	return (
		<section className="overflow-hidden rounded-lg border border-border">
			<Table>
				<TableHeader className="bg-muted/50">
					<TableRow>
						<TableHead>Projet</TableHead>
						<TableHead className="hidden md:table-cell">Participants</TableHead>
						<TableHead className="hidden lg:table-cell">Budget</TableHead>
						<TableHead className="hidden text-center sm:table-cell">
							Alerte
						</TableHead>
						<TableHead className="hidden text-right sm:table-cell">
							Ton solde
						</TableHead>
						<TableHead className="w-10" />
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((project) => (
						<ProjectRow key={project.id} project={project} />
					))}
				</TableBody>
			</Table>
		</section>
	);
}
