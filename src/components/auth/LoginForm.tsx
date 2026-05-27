import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginFormProps = {
    onRegisterClick: () => void;
};

export function LoginForm({ onRegisterClick }: LoginFormProps) {
    return (
        <form className="space-y-5">
            <header>
                <h2 className="text-2xl font-semibold tracking-tight">
                    Bon retour parmi nous
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Connectez-vous à votre compte.
                </p>
            </header>

            <div className="space-y-2">
                <Label htmlFor="login-email">Adresse email</Label>
                <Input id="login-email" type="email" placeholder="lapince@famille.fr" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input id="login-password" type="password" placeholder="••••••••" />
            </div>

            <Button className="w-full">Se connecter</Button>

            <p className="text-center text-sm text-muted-foreground">
                Pas encore de compte ?{" "}
                <button
                    type="button"
                    onClick={onRegisterClick}
                    className="font-medium text-foreground hover:underline"
                >
                    S&apos;inscrire ici
                </button>
            </p>
        </form>
    );
}