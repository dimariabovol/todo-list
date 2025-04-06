import { JSX } from "react";
import "./App.css";
import { TodoProvider } from "./context/todoContext";
import { TodoList } from "./components/todo/TodoList";
import { TodoForm } from "./components/todo/TodoForm";
import { Pagination } from "./components/todo/TodoPagination";

function App(): JSX.Element {
	return (
		<TodoProvider>
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
				<div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 border border-gray-200">
					<TodoForm />
					<TodoList />
					<Pagination />
				</div>
				<p className="mt-4 text-sm text-center text-gray-500">
					Note: changes won't persist due to use of mock{" "}
					<a href="https://dummyjson.com/" className="text-blue-500 underline">
						DummyJSON
					</a>{" "}
					API
				</p>
			</div>
		</TodoProvider>
	);
}

export default App;
