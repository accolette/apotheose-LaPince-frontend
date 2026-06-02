import type { BudgetSummary } from "@/types/budget";
import type { ParticipantBalance } from "@/types/reimbursement";
import type { CategoriesResponse, ICategories, LoginResponse, UserResponse } from "@/types";
import type { IOperation, IOperationsResponse } from "@/types/operations";

const BASE_URL = import.meta.env.VITE_API_URL;

// ── Payloads ────────────────────────────────────────────────────────────────

// Data sent to POST /api/auth/register
export type RegisterPayload = {
	name: string;
	email: string;
	password: string;
};

// Data sent to POST /api/auth/login
export type LoginPayload = {
	email: string;
	password: string;
};

// ── Helpers ─────────────────────────────────────────────────────────────────

// Returns the JWT stored in localStorage (or null if not logged in)
function getToken(): string | null {
	return localStorage.getItem("token");
}

// Builds fetch headers, with Authorization if needed
function buildHeaders(withAuth = false): HeadersInit {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (withAuth) {
		const token = getToken();
		if (token) headers.Authorization = `Bearer ${token}`;
	}
	return headers;
}

// Throws the error body if the response is not ok
async function handleResponse<T>(res: Response): Promise<T> {
	if (!res.ok) {
		const error = await res.json().catch(() => ({ error: res.statusText }));
		throw error;
	}
	return res.json();
}

// ── Auth endpoints ───────────────────────────────────────────────────────────

export async function apiRegister(
	payload: RegisterPayload,
): Promise<UserResponse> {
	const res = await fetch(`${BASE_URL}/api/auth/register`, {
		method: "POST",
		headers: buildHeaders(),
		body: JSON.stringify(payload),
	});
	return handleResponse(res);
}

export async function apiLogin(payload: LoginPayload): Promise<LoginResponse> {
	const res = await fetch(`${BASE_URL}/api/auth/login`, {
		method: "POST",
		headers: buildHeaders(),
		body: JSON.stringify(payload),
	});
	return handleResponse(res);
}

export async function apiLogout(): Promise<void> {
	const res = await fetch(`${BASE_URL}/api/auth/logout`, {
		method: "POST",
		headers: buildHeaders(true),
	});
	return handleResponse(res);
}

export async function apiMe(): Promise<UserResponse> {
	const res = await fetch(`${BASE_URL}/api/auth/me`, {
		method: "GET",
		headers: buildHeaders(true),
	});
	return handleResponse(res);
}

// ── Budget endpoints ─────────────────────────────────────────────────────────

export async function apiGetBudgets(projectId: number): Promise<BudgetSummary> {
	const res = await fetch(`${BASE_URL}/api/projects/${projectId}/budgets`, {
		method: "GET",
		headers: buildHeaders(true),
	});
	return handleResponse<BudgetSummary>(res);
}

// ── Balance endpoints ────────────────────────────────────────────────────────

export async function apiGetBalance(
	projectId: number,
): Promise<ParticipantBalance[]> {
	const res = await fetch(`${BASE_URL}/api/projects/${projectId}/balance`, {
		method: "GET",
		headers: buildHeaders(true),
	});
	return handleResponse<ParticipantBalance[]>(res);
}

// ── Category endpoints ───────────────────────────────────────────────────────────

export async function apiGetCategories(): Promise<ICategories[]> {
	const res = await fetch(`${BASE_URL}/api/categories`, {
		method: "GET",
		headers: buildHeaders(false),
	});
	const data = await handleResponse<CategoriesResponse>(res);
	return data.categories;
}

// ── Operation endpoints ───────────────────────────────────────────────────────────

export async function apiGetOperations(
	projectId: number,
): Promise<IOperation[]> {
	const res = await fetch(`${BASE_URL}/api/projects/${projectId}/operations`, {
		method: "GET",
		headers: buildHeaders(true),
	});
	const data = await handleResponse<IOperationsResponse>(res);
	return data.operations;
}

