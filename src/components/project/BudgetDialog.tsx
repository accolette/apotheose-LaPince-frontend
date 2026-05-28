import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type BudgetDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export function BudgetDialog({ open, onOpenChange }: BudgetDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>Mes budgets</DialogTitle>
				</DialogHeader>

				<form className="space-y-4">
					<Button type="button" size="sm">
						<Plus className="size-4" />
						Ajouter un budget
					</Button>

					<ul className="space-y-2">
						{["Hébergement", "Transport", "Restauration"].map((category) => (
							<li key={category} className="flex items-center gap-2">
								<Select defaultValue={category}>
									<SelectTrigger className="flex-1">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Hébergement">Hébergement</SelectItem>
										<SelectItem value="Transport">Transport</SelectItem>
										<SelectItem value="Restauration">Restauration</SelectItem>
										<SelectItem value="Activités">Activités</SelectItem>
										<SelectItem value="Courses">Courses</SelectItem>
										<SelectItem value="Autre">Autre</SelectItem>
									</SelectContent>
								</Select>

								<div className="relative w-32 shrink-0">
									<Input
										type="number"
										defaultValue={
											category === "Hébergement"
												? 400
												: category === "Transport"
													? 250
													: 150
										}
										className="pr-7 text-right tabular-nums"
									/>
									<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
										€
									</span>
								</div>

								<Button
									type="button"
									variant="ghost"
									size="icon"
									className="text-muted-foreground hover:text-destructive"
								>
									<X className="size-4" />
								</Button>
							</li>
						))}
					</ul>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Annuler
						</Button>
						<Button type="submit">Enregistrer</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
