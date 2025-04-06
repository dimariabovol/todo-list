export interface ITodo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

export interface ITodosState {
	todos: ITodo[];
	total: number;
}

export interface ITodoContext {
	state: ITodosState;
	dispatch: React.Dispatch<TTodoAction>;
}

export type TTodoAction =
	| { type: "GET_TODOS"; payload: ITodosState }
	| { type: "ADD_TODO"; payload: ITodo }
	| { type: "DELETE_TODO"; payload: ITodo }
	| { type: "UPDATE_TODO"; payload: ITodo };
