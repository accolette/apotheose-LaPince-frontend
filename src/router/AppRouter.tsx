import { BrowserRouter, Route, Routes } from "react-router";
import { AuthPage } from "@/pages/AuthPage";
import { HomePage } from "@/pages/HomePage";

export function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<AuthPage defaultMode="login" />} />
                <Route path="/register" element={<AuthPage defaultMode="register" />} />
            </Routes>
        </BrowserRouter>
    );

}