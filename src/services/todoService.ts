import { ITodo } from "../types/todo";

const API_URL = "https://dummyjson.com/todos";

export const todoService = {
	async getTodos(
		limit: number = 5,
		skip: number = 0
	): Promise<{ todos: ITodo[]; total: number }> {
		const res = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
		const data = await res.json();

		data.total = 25; // intentional truncation
		return data;
	},
	async addTodo(todo: ITodo): Promise<ITodo> {
		const res = await fetch(`${API_URL}/add`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todo),
		});
		const data = await res.json();

		return data;
	},
	async deleteTodo(id: number): Promise<ITodo> {
		const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
		const data = await res.json();

		return data;
	},
	async updateTodoStatus(id: number, status: boolean): Promise<ITodo> {
		const res = await fetch(`${API_URL}/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ completed: status }),
		});
		const data = await res.json();

		return data;
	},
};
