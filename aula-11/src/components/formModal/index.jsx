const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`${isOpen ? 'open' : 'hidden'} `}>
      <div className="absolute top-0 left-0 p-10 h-screen w-screen bg-slate-50">
      <h3 className="mb-5 text-center">Preencha os campos abaixo para adicionar um item</h3>
      <form action="" className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Título"
          className="border-2 bg-gray-200 rounded px-2"
        />
        <input
          type="text"
          placeholder="Data"
          className="border-2 bg-gray-200 rounded px-2"
        />
        <input
          type="text"
          placeholder="Valor"
          className="border-2 bg-gray-200 rounded px-2"
        />
        <select
          type="text"
          placeholder="Tipo"
          className="border-2 bg-gray-200 rounded px-2"
        >
          <option value="">Tipo</option>
          <option value="trabalho">Tipo 1</option>
          <option value="lazer">Tipo 2</option>
          <option value="prioridade">Tipo 3</option>
          <option value="outros">Tipo 4</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border-2 bg-gray-200 rounded px-2 resize-none"
        ></textarea>
        <button className="flex bg-primary text-white justify-center rounded p-3 hover:bg-hover" onClick={onClose}>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
