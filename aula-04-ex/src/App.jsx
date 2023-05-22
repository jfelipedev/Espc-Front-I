import ReactModal from "react-modal";
import Cards from "./components/cards";
import LeftSide from "./components/leftside";
import useTodo from "./hooks/useTodo";
import "./styles.scss";
import editIcon from "./assets/edit-icon.png";
import deleteIcon from "./assets/delete-icon.png";
import { useState } from "react";

export default function App() {
  const { todos, error, deleteTodo } = useTodo();

  const [editedItem, setEditedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function openModal(item) {
    setEditedItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setDescription(item.description);
    setDate(item.date);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function saveChanges() {
    // colocar aqui a lógica pra fazer update
    closeModal();
  }

  // function formatDate(date) {
  //   const dateFormated = todos.date.split("T")[0];
  //   setDate(dateFormated);
  //   return new Date(date).toLocaleDateString("pt-BR");
  // }

  return (
    <div className="main-container">
      <LeftSide />
      <div className="cards-container">
        <div className="title">
          <h2>Minhas Tarefas</h2>
          <h4>total de tarefas: {todos ? todos.length : 0}</h4>
        </div>
        {error ? (
          <p>
            Erro ao carregar os dados. Por favor, tente novamente mais tarde.
          </p>
        ) : (
          <>
            {todos ? (
              todos.map((item) => (
                <Cards
                  key={item._id}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  date={item.date}
                  img1={<img src={editIcon} onClick={() => openModal(item)} />}
                  img2={
                    <img
                      src={deleteIcon}
                      onClick={() => deleteTodo(item._id)}
                    />
                  }
                />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </>
        )}
      </div>

      <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Item"
      >
        <h3>Editando: {editedItem?.title}</h3>
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
          type="text"
          className="input-text border-style"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          id=""
          placeholder="Data"
          className="border-style"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <button onClick={saveChanges}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </ReactModal>
    </div>
  );
}
