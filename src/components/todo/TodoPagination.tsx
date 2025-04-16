import { useContext } from "react";
import { todoService } from "../../services/todoService";
import { TodoContext } from "../../context/todoContext";

export const Pagination = () => {
	const { state, dispatch } = useContext(TodoContext);
	const limit: number = 5;
	const skip: number = 5;
	const length: number = Math.ceil(state.total / limit);

	const handleClick = async (limit: number, skip: number) => {
		const data = await todoService.getTodos(limit, skip);
		dispatch({ type: "GET_TODOS", payload: data });
	};

	return (
		<nav className="mt-8">
			<ul className="flex justify-center space-x-2">
				{Array.from({ length }, (_, index) => (
					<li key={index}>
						<button
							onClick={() => handleClick(limit, index * skip)}
							className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
							aria-label={`Page ${index + 1}`}
						>
							{index + 1}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
