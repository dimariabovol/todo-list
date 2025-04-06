import { createContext, useEffect, useReducer } from "react";
import { TTodoAction, ITodosState, ITodoContext, ITodo } from "../types/todo";
import { todoService } from "../services/todoService";

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

const todoReducer = (state: ITodosState, action: TTodoAction): ITodosState => {
	switch (action.type) {
		case "GET_TODOS":
			return {
				...state,
				todos: action.payload.todos,
				total: action.payload.total,
			};
		case "ADD_TODO":
			return { ...state, todos: [...state.todos, action.payload] };
		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter(
					(todo: ITodo) => todo.id !== action.payload.id
				),
			};
		case "UPDATE_TODO":
			return {
				...state,
				todos: state.todos.map((todo: ITodo) =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		default:
			return state;
	}
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(todoReducer, { todos: [], total: 0 });

	useEffect(() => {
		const getTodos = async () => {
			const data = await todoService.getTodos();
			dispatch({ type: "GET_TODOS", payload: data });
		};

		getTodos();
	}, []);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};
