import { ITodo } from "../types/todo";

const API_URL = "https://dummyjson.com/todos";

export const todoService = {
	async getTodos(): Promise<ITodo[]> {
		const res = await fetch(`${API_URL}?limit=5`);
		const data = await res.json();

		return data.todos;
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
