import { type Project, ProjectRow } from "@/components/projects/ProjectRow";

const projects: Project[] = [
	{
		id: "1",
		name: "Week-end à Lisbonne",
		description: "3 jours entre amis",
		expensesCount: 12,
		updatedAt: "mis à jour il y a 2 h",
		status: "active",
		icon: "plane",
		participants: ["SL", "AL", "BO", "CH"],
		spent: "847,50 €",
		budget: "1 000 €",
		budgetPercent: 85,
		alertsCount: 1,
		balance: "−45,20 €",
		balanceStatus: "negative",
	},
	{
		id: "2",
		name: "Coloc rue Pasteur",
		description: "Colocation",
		expensesCount: 47,
		updatedAt: "mis à jour hier",
		status: "active",
		icon: "home",
		participants: ["SL", "MA", "JU"],
		spent: "2 340 €",
		budget: "2 000 €",
		budgetPercent: 100,
		alertsCount: 2,
		balance: "+128,40 €",
		balanceStatus: "positive",
	},
	{
		id: "3",
		name: "Anniversaire Léa",
		description: "Organisation anniversaire",
		expensesCount: 4,
		updatedAt: "mis à jour il y a 3 jours",
		status: "active",
		icon: "cake",
		participants: ["SL", "LE", "PA", "+3"],
		spent: "180 €",
		budget: "500 €",
		budgetPercent: 36,
		alertsCount: 0,
		balance: "Équilibré",
		balanceStatus: "neutral",
	},
];

export function ProjectsTable() {
	return (
		<section className="overflow-hidden rounded-lg border border-border">
			<table className="w-full text-sm">
				<thead className="border-b border-border bg-muted/50">
					<tr className="text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
						<th className="px-6 py-3">Projet</th>
						<th className="hidden px-6 py-3 md:table-cell">Participants</th>
						<th className="hidden px-6 py-3 lg:table-cell">Budget</th>
						<th className="hidden px-6 py-3 text-center sm:table-cell">
							Alerte
						</th>
						<th className="hidden px-6 py-3 text-right sm:table-cell">
							Ton solde
						</th>
						<th className="w-10" />
					</tr>
				</thead>

				<tbody className="divide-y divide-border">
					{projects.map((project) => (
						<ProjectRow key={project.id} project={project} />
					))}
				</tbody>
			</table>
		</section>
	);
}
