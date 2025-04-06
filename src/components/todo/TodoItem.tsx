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

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedTodo = await todoService.updateTodoStatus(
			todo.id,
			e.target.checked
		);
		dispatch({ type: "UPDATE_TODO", payload: updatedTodo });

		setTodoStatus(updatedTodo.completed);
	};

	return (
		<div className="flex items-center p-3 border border-gray-300 rounded-md mb-2">
			<label className="flex items-center gap-2 flex-grow cursor-pointer">
				<input
					type="checkbox"
					checked={status}
					onChange={handleChange}
					className="w-5 h-5 cursor-pointer"
				/>
				<span className={`${status ? "line-through text-gray-400" : ""}`}>
					{todo.todo}
				</span>
			</label>
		</div>
	);
};
