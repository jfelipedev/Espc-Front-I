import api from "../services/api";

export async function getTodos() {
  return (await api.get("/todo")).data;
}

export async function addTodo(todo) {
  return await api.post("/todo", todo);
}

export async function editTodo(todo, id) {
  return await api.put(`/todo/${id}`, todo);
}

export async function deleteTodo(id) {
  return (await api.delete(`/todo/${id}`)).data;
}