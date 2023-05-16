import "./styles.scss";

export default function LeftSide() {
  return (
    <div className="container-leftside">
      <div className="register-task">
        <h3>Cadastrar Tarefa</h3>
        <input
          type="text"
          className="input-text border-style "
          placeholder="Título"
        />
        <select name="" id="" placeholder="Categoria" className="border-style">
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
        ></input>
        <input
          type="text"
          className="input-text border-style"
          placeholder="Descrição"
        />
        <center>
          <button className="save-button">Salvar</button>
        </center>
      </div>
    </div>
  );
}
