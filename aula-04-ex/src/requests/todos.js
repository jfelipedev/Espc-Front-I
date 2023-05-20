import api from "../services/api";

export async function getTodos(){
    return (await api.get("/todo")).data
}

export async function addTodo(todo){
    return (await api.post("/todo", todo))
}