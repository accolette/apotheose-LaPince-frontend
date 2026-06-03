import { ArrowRight } from "lucide-react";
import { useProject } from "@/context/ProjectContext";
import type { ParticipantBalance } from "@/types/reimbursement";

export function BalanceCard() {
	const { reimbursements } = useProject();
	// TODO: replace with reimbursements when greedy algorithm is implemented server-side
	// For now, display raw balances from GET /api/projects/:id/balance
	// reimbursements contains ParticipantBalance[] temporarily

	if (!reimbursements.length) return null;

	return (
		<div className="overflow-hidden rounded-lg border border-border bg-card">
			<div className="flex items-baseline justify-between border-b border-border px-6 py-4">
				<h2 className="text-sm font-medium">Balance</h2>

				<p className="text-xs text-muted-foreground">
					{reimbursements.length} transaction
					{reimbursements.length > 1 ? "s" : ""}
				</p>
			</div>

			<ul className="divide-y divide-border">
				{reimbursements.map((participant: ParticipantBalance) => (
					<li
						key={`${participant.participantId}`}
						className="flex items-center gap-3 px-6 py-4"
					>
						<div className="flex flex-1 items-center gap-1.5 text-sm">
							<span className="font-medium">{participant.name}</span>
							<ArrowRight className="size-3.5 text-muted-foreground" />
							{/* TODO mettre le nom du partcipant a remboursé avec glouton */}
							<span className="font-medium">{participant.name}</span>
						</div>
						<span className="tabular-nums text-sm font-semibold">
							{participant.balance.toLocaleString("fr-FR", {
								style: "currency",
								currency: "EUR",
							})}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
