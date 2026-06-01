// Shape of a single budget returned by GET /api/projects/:id/budgets
// spent is not stored in DB — computed by the back via SUM of operations by category
export type Budget = {
	id: number;
	categoryId: number;
	categoryName: string;
	color: string;
	spent: number;
	limit: number;
	alertThreshold: number;
};

// Shape of the full response of GET /api/projects/:id/budgets
export type BudgetSummary = {
	totalSpent: number;
	totalLimit: number;
	budgets: Budget[];
};