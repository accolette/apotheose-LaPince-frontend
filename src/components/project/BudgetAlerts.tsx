import { AlertTriangle, Check } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";

export function BudgetAlerts() {
	return (
		<Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50 mb-6">
			<div className="flex items-start justify-between gap-4">
				<div className="flex gap-3">
					<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-zinc-950">
						<AlertTriangle className="size-4" />
					</span>

					<div>
						<AlertTitle>Seuil d’alerte atteint</AlertTitle>

						<AlertDescription>
							Le budget “Hébergement” a dépassé 80 % du montant prévu — 847,50 €
							sur 1 000 €.
						</AlertDescription>
					</div>
				</div>

				<Button
					type="button"
					size="sm"
					variant="outline"
					className="border-amber-300 bg-white text-amber-900 hover:bg-amber-100"
				>
					<Check className="size-3.5" />
					Marquer comme lu
				</Button>
			</div>
		</Alert>
	);
}
