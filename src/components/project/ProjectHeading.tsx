import type { Project } from "@/types/project";
import { ParticipantStack } from "../common/ParticipantStack";

const project: Project[] = [
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

export function ProjectHeading() {
	return (
		<div className="mb-8 flex items-end justify-between">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight">
					{project[2].name}
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					{project[2].description}
				</p>
			</div>
			<ParticipantStack participants={project[2].participants} size="md" />
		</div>
	);
}
