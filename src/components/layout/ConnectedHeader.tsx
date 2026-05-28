import { LandmarkIcon, MoonIcon } from "lucide-react";

export function ConnectedHeader() {
	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
				<div className="flex items-center gap-2 font-semibold">
					<span className="bg-primary text-primary-foreground inline-flex size-7 items-center justify-center rounded">
						<LandmarkIcon className="size-4" />
					</span>

					<span>LaPince</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						className="border-border text-muted-foreground hover:text-foreground hover:border-foreground flex size-8 items-center justify-center rounded-full border transition"
					>
						<MoonIcon className="size-4" />
					</button>
					<button
						type="button"
						className="bg-muted border-border hover:border-foreground flex size-8 items-center justify-center rounded-full border text-xs font-medium transition"
					>
						{/* user AVATAR */}
						SL
					</button>
				</div>
			</div>
		</header>
	);
}
