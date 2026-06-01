import { useState } from "react";

import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

type AuthMode = "login" | "register";

type AuthPageProps = {
	defaultMode: AuthMode;
};

export function AuthPage({ defaultMode }: AuthPageProps) {
	const [mode, setMode] = useState<AuthMode>(defaultMode);

	return (
		<main className="flex min-h-screen items-center justify-center px-4">
			<div className="w-full max-w-md">
				{mode === "login" ? (
					<LoginForm onRegisterClick={() => setMode("register")} />
				) : (
					<RegisterForm onLoginClick={() => setMode("login")} />
				)}
			</div>
		</main>
	);
}
