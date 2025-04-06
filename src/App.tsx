import { JSX } from "react";
import "./App.css";
import { TodoProvider } from "./context/todoContext";
import { TodoList } from "./components/todo/TodoList";
import { TodoForm } from "./components/todo/TodoForm";

function App(): JSX.Element {
	return (
		<TodoProvider>
			<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
				<div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 border border-gray-200">
					<TodoForm />
					<TodoList />
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
