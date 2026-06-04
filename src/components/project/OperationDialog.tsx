import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/context/CategoriesContext";
import type { IOperationDialogState } from "@/types/operations";

type OperationDialogProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	operationDialogState: IOperationDialogState | null;
	setOperationDialogState: (state: IOperationDialogState | null) => void;
};

export function OperationDialog({
	open,
	onOpenChange,
	operationDialogState,
	setOperationDialogState,
}: OperationDialogProps) {
	const { categories } = useCategories();
	const dialogMode = operationDialogState?.mode ?? "create";

	function updateOperationDialogState(updates: Partial<IOperationDialogState>) {
		if (!operationDialogState) return;

		setOperationDialogState({
			...operationDialogState,
			...updates,
		});
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>
						{dialogMode === "edit"
							? "Modifier l'opération"
							: "Nouvelle opération"}
					</DialogTitle>
				</DialogHeader>

				<form className="space-y-5">
					<div className="grid grid-cols-5 gap-3">
						<div className="col-span-3 space-y-2">
							<Label htmlFor="operation-description">Description</Label>
							<Input
								id="operation-description"
								placeholder="Dîner Time Out Market"
								value={operationDialogState?.name ?? ""}
								onChange={(event) =>
									updateOperationDialogState({ name: event.target.value })
								}
							/>
						</div>

						<div className="col-span-2 space-y-2">
							<Label htmlFor="operation-amount">Montant</Label>
							<div className="relative">
								<Input
									id="operation-amount"
									type="number"
									step="0.01"
									placeholder="128,40"
									className="pr-8 text-right font-medium"
									value={operationDialogState?.amount ?? ""}
									onChange={(event) =>
										updateOperationDialogState({ amount: event.target.value })
									}
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
									€
								</span>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-5 gap-3">
						<div className="col-span-3 space-y-2">
							<Label>Catégorie</Label>

							<Select
								value={operationDialogState?.categoryId}
								onValueChange={(categoryId) =>
									updateOperationDialogState({ categoryId })
								}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Catégorie" />
								</SelectTrigger>

								<SelectContent>
									{categories.map((category) => (
										<SelectItem key={category.id} value={String(category.id)}>
											{category.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="col-span-2 space-y-2">
							<Label htmlFor="operation-date">Date</Label>

							<Input
								id="operation-date"
								type="date"
								value={operationDialogState?.date ?? ""}
								onChange={(event) =>
									updateOperationDialogState({ date: event.target.value })
								}
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label>Payé par</Label>

						<Select
							value={operationDialogState?.payerParticipantId}
							onValueChange={(payerParticipantId) =>
								updateOperationDialogState({ payerParticipantId })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Participant" />
							</SelectTrigger>

							<SelectContent>
								{operationDialogState?.participants.map((participant) => (
									<SelectItem
										key={participant.participantId}
										value={String(participant.participantId)}
									>
										{participant.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<div className="flex items-baseline justify-between">
							<Label>Participants actifs</Label>
						</div>

						<ul className="overflow-hidden rounded-md border border-border">
							{operationDialogState?.participants.map((participant) => (
								<li
									key={participant.participantId}
									className="flex items-center gap-3 border-b border-border px-3 py-2 last:border-b-0"
								>
									<label className="flex min-w-0 flex-1 cursor-pointer items-center gap-2">
										<input
											type="checkbox"
											checked={participant.isSelected}
											onChange={(event) =>
												updateOperationDialogState({
													participants: operationDialogState.participants.map(
														(item) =>
															item.participantId === participant.participantId
																? {
																		...item,
																		isSelected: event.target.checked,
																	}
																: item,
													),
												})
											}
											className="size-4"
										/>

										<span
											className={`flex size-7 text-white shrink-0 items-center justify-center rounded-full text-[10px] font-medium ${participant.avatarColor}`}
										>
											{participant.initials}
										</span>

										<span className="truncate text-sm">{participant.name}</span>
									</label>

									<div className="relative w-28 shrink-0">
										<Input
											type="number"
											min="0"
											placeholder="auto"
											className="h-8 pr-6 text-right text-xs tabular-nums placeholder:italic"
											value={participant.repartitionAmount}
											onChange={(event) =>
												updateOperationDialogState({
													participants: operationDialogState.participants.map(
														(item) =>
															item.participantId === participant.participantId
																? {
																		...item,
																		repartitionAmount: event.target.value,
																	}
																: item,
													),
												})
											}
										/>

										<span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
											€
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Annuler
						</Button>

						<Button type="submit">
							{dialogMode === "edit" ? "Modifier" : "Créer"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
