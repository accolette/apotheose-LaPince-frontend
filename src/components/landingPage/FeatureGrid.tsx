import { TargetIcon, TrendingUpIcon, UsersIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ComingSoonBadge } from "./ComingSoonBadge";

export function FeatureGrid() {
	return (
		<section className="w-full border-b bg-muted/40">
			<div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
				<h2 className="text-center text-3xl font-semibold tracking-tight">
					Tout ce dont vous avez besoin
				</h2>

				<div className="mt-12 grid gap-6 md:grid-cols-3">
					<Card>
						<CardContent className="p-6">
							<span className="mb-4 inline-flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
								<TrendingUpIcon className="size-5" />
							</span>

							<h3 className="text-lg font-semibold tracking-tight">
								Suivi des dépenses
							</h3>

							<p className="mt-2 text-sm text-muted-foreground">
								Catégorisez chaque dépense en quelques secondes. Visualisez où
								part votre argent chaque mois.
							</p>
						</CardContent>
					</Card>

					<Card className="relative">
						<ComingSoonBadge />
						<CardContent className="p-6">
							<span className="mb-4 inline-flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
								<TargetIcon className="size-5" />
							</span>

							<h3 className="text-lg font-semibold tracking-tight">
								Objectifs d&apos;épargne
							</h3>

							<p className="mt-2 text-sm text-muted-foreground">
								Définissez des objectifs familiaux et suivez votre progression
								ensemble mois par mois.
							</p>
						</CardContent>
					</Card>

					<Card className="relative">
						<ComingSoonBadge />
						<CardContent className="p-6">
							<span className="mb-4 inline-flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
								<UsersIcon className="size-5" />
							</span>

							<h3 className="text-lg font-semibold tracking-tight">
								Comptes partagés
							</h3>

							<p className="mt-2 text-sm text-muted-foreground">
								Invitez les membres de votre famille et vos amis. Chacun voit et
								ajoute ses dépenses en temps réel.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
