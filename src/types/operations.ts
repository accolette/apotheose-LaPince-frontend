export interface IOperationParticipant {
	repartitionAmount: number;
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
	amount: number;
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

export type OperationDialogMode = "create" | "edit";

export interface IOperationDialogParticipant {
	participantId: number;
	name: string;
	initials: string;
	avatarColor: string;
	isSelected: boolean;
	repartitionAmount: string;
}

export interface IOperationDialogState {
	mode: OperationDialogMode;
	operationId: number | null;
	name: string;
	amount: number;
	categoryId: number | undefined;
	date: string;
	payerParticipantId: number | undefined;
	participants: IOperationDialogParticipant[];
}
