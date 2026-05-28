import { BrowserRouter, Route, Routes } from "react-router";
import { AuthPage } from "@/pages/AuthPage";
import { HomePage } from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<AuthPage defaultMode="login" />} />
				<Route path="/register" element={<AuthPage defaultMode="register" />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/project" element={<ProjectPage />} />
			</Routes>
		</BrowserRouter>
	);
}
