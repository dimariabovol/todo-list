import { useContext, useState, useEffect } from "react";
import { ITodo } from "../../types/todo";
import { todoService } from "../../services/todoService";
import { TodoContext } from "../../context/todoContext";

export const TodoItem = ({ todo }: { todo: ITodo }) => {
	const { dispatch } = useContext(TodoContext);
	const [status, setTodoStatus] = useState(todo.completed);

	useEffect(() => {
		setTodoStatus(todo.completed);
	}, [todo.completed]);

	const handleUpdateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedTodo = await todoService.updateTodoStatus(
			todo.id,
			e.target.checked
		);
		dispatch({ type: "UPDATE_TODO", payload: updatedTodo });

		setTodoStatus(updatedTodo.completed);
	};

	const handleDeleteChange = async () => {
		const deletedTodo = await todoService.deleteTodo(todo.id);
		dispatch({ type: "DELETE_TODO", payload: deletedTodo });
	};

	return (
		<div className="flex items-center justify-between p-3 border border-gray-300 rounded-md mb-2">
			<label className="flex items-center gap-2 flex-grow cursor-pointer">
				<input
					type="checkbox"
					checked={status}
					onChange={handleUpdateChange}
					className="w-5 h-5 cursor-pointer flex-shrink-0"
				/>
				<span className={`${status ? "line-through text-gray-400 " : ""}`}>
					{todo.todo}
				</span>
			</label>
			<button
				onClick={handleDeleteChange}
				className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
				aria-label="Delete todo"
			>
				<svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
};
