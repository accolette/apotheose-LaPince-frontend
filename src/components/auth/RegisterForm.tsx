import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RegisterFormProps = {
	onLoginClick: () => void;
};

export function RegisterForm({ onLoginClick }: RegisterFormProps) {
	return (
		<form className="space-y-5">
			<header>
				<h2 className="text-2xl font-semibold tracking-tight">
					Créer un compte
				</h2>
				<p className="mt-1 text-sm text-muted-foreground">
					30 secondes, pas de carte bancaire.
				</p>
			</header>

			<div className="space-y-2">
				<Label htmlFor="register-name">Nom</Label>
				<Input id="register-name" type="text" placeholder="Dupuis" />
			</div>

			<div className="space-y-2">
				<Label htmlFor="register-email">Adresse email</Label>
				<Input
					id="register-email"
					type="email"
					placeholder="lapince@famille.fr"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="register-password">Mot de passe</Label>
				<Input
					id="register-password"
					type="password"
					placeholder="Min. 8 caractères"
				/>
			</div>

			<Button className="w-full">S&apos;inscrire</Button>

			<p className="text-center text-sm text-muted-foreground">
				Déjà un compte ?{" "}
				<button
					type="button"
					onClick={onLoginClick}
					className="font-medium text-foreground hover:underline"
				>
					Connexion ici
				</button>
			</p>
		</form>
	);
}
