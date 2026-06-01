// Shape of a single reimbursement returned by GET /api/projects/:id/balance
// Not stored in DB — computed on the fly by the greedy algorithm
export type Reimbursement = {
	from: string;
	to: string;
	amount: number;
};