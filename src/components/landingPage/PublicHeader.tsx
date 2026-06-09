import { Button } from "@/components/ui/button";


export function PublicHeader() {
	return (
		<header className="w-full border-b bg-background">
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<a href="/" className="flex items-center gap-2 font-semibold">
						<span className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-md">
							<Landmark className="h-4 w-4" />
						</span>

						<span>LaPince</span>
					</a>
					<nav className="flex items-center gap-4">
						<Button variant="ghost" render={<a href="/login">Connexion</a>} />
						<Button render={<a href="/register">S'inscrire</a>} />
					</nav>
				</div>
			</div>
		</header>
	);
}
