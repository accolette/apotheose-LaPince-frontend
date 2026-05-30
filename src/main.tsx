import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import ProjectsProvider from "./context/ProjectsContext.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<AuthProvider>
			<ProjectsProvider>
				<App />
			</ProjectsProvider>
		</AuthProvider>
	</StrictMode>,
);
