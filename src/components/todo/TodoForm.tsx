import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { todoService } from "../../services/todoService";
import { ITodo } from "../../types/todo";

export const TodoForm = () => {
	const { dispatch } = useContext(TodoContext);
	const [todoText, setTodoText] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!todoText.trim()) return;

		const newTodo = await todoService.addTodo({
			todo: todoText,
			completed: false,
			userId: 1,
		} as ITodo);

		dispatch({ type: "ADD_TODO", payload: newTodo });
		setTodoText("");
	};

	return (
		<form onSubmit={handleSubmit} className="mb-8">
			<div className="flex flex-col gap-2">
				<label
					htmlFor="new-todo"
					className="text-lg font-medium text-gray-700 dark:text-gray-200"
				>
					Add a new task:
				</label>
				<div className="flex items-center gap-2">
					<input
						id="new-todo"
						type="text"
						value={todoText}
						onChange={(e) => setTodoText(e.target.value)}
						placeholder="Type..."
						className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700"
					>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};
