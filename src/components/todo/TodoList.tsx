import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { ITodo } from "../../types/todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const { state } = useContext(TodoContext);

	return (
		<div className="mt-4">
			{state.todos.length > 0 ? (
				<ul className="list-none p-0 m-0">
					{state.todos.map((todo: ITodo) => (
						<li key={todo.id}>
							<TodoItem todo={todo} />
						</li>
					))}
				</ul>
			) : (
				<p className="text-gray-500 text-center py-4">No todos yet</p>
			)}
		</div>
	);
};
