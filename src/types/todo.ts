export interface ITodo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

export interface ITodosState {
	todos: ITodo[];
}

export interface ITodoContext {
	state: ITodosState;
	dispatch: React.Dispatch<TTodoAction>;
}

export type TTodoAction =
	| { type: "GET_TODOS"; payload: ITodo[] }
	| { type: "ADD_TODO"; payload: ITodo }
	| { type: "UPDATE_TODO"; payload: ITodo };
