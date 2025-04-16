import { JSX } from "react";
import "./App.css";
import { TodoProvider } from "./context/todoContext";
import { TodoList } from "./components/todo/TodoList";
import { TodoForm } from "./components/todo/TodoForm";
import { Pagination } from "./components/todo/TodoPagination";
import { ThemeProvider } from "./context/themeContext";
import { Header } from "./components/Header";

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<TodoProvider>
				<div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
					<Header />
					<main className="flex-grow flex flex-col items-center justify-center p-4 mt-4">
						<div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
							<TodoForm />
							<TodoList />
							<Pagination />
						</div>
						<p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 transition-colors">
							Note: changes won't persist due to use of mock{" "}
							<a href="https://dummyjson.com/" className="text-blue-500 dark:text-blue-400 underline">
								DummyJSON
							</a>{" "}
							API
						</p>
					</main>
				</div>
			</TodoProvider>
		</ThemeProvider>
	);
}

export default App;
