import { Landmark, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemesContext";
import { Link } from "react-router";


export function PublicHeader() {
	const { theme, setTheme } = useTheme();
	const isDark =
		theme === "dark" ||
		(theme === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches);
	return (
		<header className="w-full border-b bg-background">
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link to="/" className="flex items-center gap-2 font-semibold">						<span className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-md">
						<Landmark className="h-4 w-4" />
					</span>

						<span>LaPince</span>
					</Link>
					<nav className="flex items-center gap-4">
						<button
							type="button"
							onClick={() => setTheme(isDark ? "light" : "dark")}
							className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground hover:text-foreground"
						>
							{isDark ? (
								<SunIcon className="size-4" />
							) : (
								<MoonIcon className="size-4" />
							)}
						</button>
						<Button variant="ghost" render={<Link to="/login">Connexion</Link>} />
						<Button render={<Link to="/register">S'inscrire</Link>} />
					</nav>
				</div>
			</div>
		</header>
	);
}
