import { Bell, ChevronRight } from "lucide-react";
import { BudgetProgress } from "@/components/projects/BudgetProgress";
import { ParticipantStack } from "@/components/projects/ParticipantStack";
import { ProjectDetails } from "@/components/projects/ProjectDetails";

type ProjectStatus = "active" | "archived";

type ProjectIcon = "plane" | "home" | "cake" | "utensils";

export type Project = {
	id: string;
	name: string;
	description: string;
	expensesCount: number;
	updatedAt: string;
	status: ProjectStatus;
	icon: ProjectIcon;
	participants: string[];
	spent: string;
	budget: string;
	budgetPercent: number;
	alertsCount: number;
	balance: string;
	balanceStatus: "negative" | "positive" | "neutral";
};

type ProjectRowProps = {
	project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
	return (
		<tr className="cursor-pointer transition hover:bg-muted/60">
			<td className="px-6 py-4">
				<ProjectDetails
					name={project.name}
					expensesCount={project.expensesCount}
					updatedAt={project.updatedAt}
					icon={project.icon}
				/>
			</td>

			<td className="hidden px-6 py-4 md:table-cell">
				<ParticipantStack participants={project.participants} />
			</td>

			<td className="hidden px-6 py-4 lg:table-cell">
				<BudgetProgress
					spent={project.spent}
					budget={project.budget}
					percent={project.budgetPercent}
				/>
			</td>

			<td className="hidden px-6 py-4 text-center sm:table-cell">
				{project.alertsCount > 0 ? (
					<span className="relative inline-flex items-center justify-center">
						<Bell className="size-4 text-muted-foreground" />

						<span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-white">
							{project.alertsCount}
						</span>
					</span>
				) : (
					<span className="text-sm text-muted-foreground">—</span>
				)}
			</td>

			<td className="hidden px-6 py-4 text-right sm:table-cell">
				<span
					className={
						project.balanceStatus === "negative"
							? "rounded border border-yellow-200 bg-yellow-100 px-2 py-0.5 text-sm font-semibold text-yellow-900"
							: project.balanceStatus === "positive"
								? "rounded border border-border bg-muted px-2 py-0.5 text-sm font-semibold text-foreground"
								: "text-sm font-medium text-muted-foreground"
					}
				>
					{project.balance}
				</span>
			</td>

			<td className="px-4 py-4 text-muted-foreground">
				<ChevronRight className="size-4" />
			</td>
		</tr>
	);
}
