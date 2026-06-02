// Shape of a single participant balance returned by GET /api/projects/:id/balance
// balance > 0 → creditor (to receive), balance < 0 → debtor (to pay)
export type ParticipantBalance = {
	participantId: number;
	name: string;
	totalPaid: number;
	totalOwed: number;
	balance: number;
};

// Shape of a single reimbursement — output of the greedy algorithm (computed server-side)
// Not stored in DB
export type Reimbursement = {
	from: string;
	to: string;
	amount: number;
};
