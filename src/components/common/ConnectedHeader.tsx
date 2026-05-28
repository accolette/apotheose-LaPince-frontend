import { LandmarkIcon, LogOutIcon, MoonIcon, UserIcon } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ConnectedHeader() {
	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
				<div className="flex items-center gap-2 font-semibold">
					<span className="inline-flex size-7 items-center justify-center rounded bg-primary text-primary-foreground">
						<LandmarkIcon className="size-4" />
					</span>

					<span>LaPince</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground hover:text-foreground"
					>
						<MoonIcon className="size-4" />
					</button>

					<DropdownMenu>
						<DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium transition hover:border-foreground">
							SL
						</DropdownMenuTrigger>

						<DropdownMenuContent align="end">
							<div className="px-2 py-1.5">
								<p className="text-sm font-medium">
									Steve
								</p>
							</div>
							<DropdownMenuItem className="text-destructive">
								<LogOutIcon className="size-4" />
								Déconnexion
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}