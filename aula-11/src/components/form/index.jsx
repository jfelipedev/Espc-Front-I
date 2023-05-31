export default function Form() {
  return (
    <div className="p-10 justify-center ">
      <button className="flex bg-primary text-white p-2 w-32 rounded justify-center md:hidden ">Novo</button>
      <div className="hidden md:flex  max-w-[500px] flex-col gap-10">
      <h3>Preencha os campos abaixo para adicionar um item</h3> 
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
          className="border-2 bg-gray-200 rounded px-2"
        ></textarea>
        <button className="flex bg-primary text-white justify-center rounded p-3 hover:bg-hover">Novo</button>
      </div>
    </div>
  );
}
