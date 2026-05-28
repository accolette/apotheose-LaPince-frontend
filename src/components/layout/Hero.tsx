import { ArrowRightIcon, LayoutDashboardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="w-full border-b bg-background">
			<div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
				<div>
					<h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
						Gérez vos budgets, simplement et ensemble.
					</h1>

					<p className="mt-6 text-lg text-muted-foreground">
						Suivez vos dépenses, planifiez vos objectifs et partagez les comptes
						avec toute la famille et vos amis — en temps réel.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Button
							className="bg-primary text-primary-foreground hover:bg-primary/80"
							render={<a href="/register">Commencer</a>}
						>
							Commencer
							<ArrowRightIcon />
						</Button>

						<Button
							variant="outline"
							render={<a href="/login">J'ai déjà un compte</a>}
						></Button>
					</div>
				</div>

				<div className="flex aspect-[4\/3] items-center justify-center rounded-lg border-2 border-dashed bg-muted text-muted-foreground">
					<div className="text-center">
						<LayoutDashboardIcon className="mx-auto mb-2 size-10" />
						<p className="text-sm">[ aperçu dashboard ]</p>
					</div>
				</div>
			</div>
		</section>
	);
}
