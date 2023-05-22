import "./styles.scss";
import { useState } from "react";
import useTodo from "../../hooks/useTodo";

export default function LeftSide() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { addTodo } = useTodo();

  return (
    <div className="container-leftside">
      <div className="register-task">
        <h3>Cadastrar Tarefa</h3>
        <input
          type="text"
          className="input-text border-style "
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name=""
          id=""
          placeholder="Categoria"
          className="border-style"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma opção</option>
          <option value="trabalho">Trabalho</option>
          <option value="lazer">Lazer</option>
          <option value="prioridade">Prioridade</option>
          <option value="outros">Outros</option>
        </select>
        <input
          type="date"
          id=""
          placeholder="Data"
          className="border-style"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          type="text"
          className="input-text border-style"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <center>
          <button
            className="save-button"
            onClick={() => addTodo({ title, category, date, description })}
          >
            Salvar
          </button>
        </center>
      </div>
    </div>
  );
}
