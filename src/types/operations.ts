export interface IOperationParticipant {
	participant: {
		id: number;
		name: string;
	};
}

export interface IOperation {
	id: number;
	appUserId: number;
	name: string;
	categoryId: number;
	amount: string;
	date: string;
	payerParticipantId: number;
	appUser: {
		id: number;
		name: string;
	};
	operationParticipants: IOperationParticipant[];
}

export interface IOperationsResponse {
	operations: IOperation[];
}