import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import CategoriesProvider from "./context/CategoriesContext.tsx";
import ProjectsProvider from "./context/ProjectsContext.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<AuthProvider>
			<CategoriesProvider>
				<ProjectsProvider>
					<App />
				</ProjectsProvider>
			</CategoriesProvider>
		</AuthProvider>
	</StrictMode>,
);
