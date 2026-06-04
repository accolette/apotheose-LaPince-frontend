import { ProjectRow } from "@/components/projects/ProjectRow";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useProjectsQuery } from "@/lib/useProjectsQuery";

export function ProjectsTable() {
	const {
		data,
		isLoading,
		isError,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useProjectsQuery();

	// Flatten all pages into a single array
	const projects = data?.pages.flatMap((page) => page.projects) ?? [];

	if (isLoading) {
		return (
			<section className="overflow-hidden rounded-lg border border-border">
				<p className="px-6 py-8 text-center text-sm text-muted-foreground">
					Chargement...
				</p>
			</section>
		);
	}

	if (isError) {
		return (
			<section className="overflow-hidden rounded-lg border border-border">
				<p className="px-6 py-8 text-center text-sm text-destructive">
					Une erreur est survenue lors du chargement des projets.
				</p>
			</section>
		);
	}

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

			{hasNextPage && (
				<div className="flex justify-center border-t border-border py-3">
					<button
						type="button"
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
						className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
					>
						{isFetchingNextPage ? "Chargement..." : "Afficher plus"}
					</button>
				</div>
			)}
		</section>
	);
}
