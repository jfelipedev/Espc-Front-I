export default function List() {
  return (
    <div className="md:p-10 sm:p-0">
      <h2 className="mb-2 font-bold">Itens</h2>
      <ul className="flex flex-col justify-center gap-5">
        <li className="w-[570px] bg-red-400 p-3 rounded">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between mr-1 text-left">
              <li className="font-bold">Conta de Luz</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem fugiat qui quibusdam nisi delectus!
              </li>
            </div>
            <div className="flex flex-col justify-between mr-1 text-right">
              <li className="font-bold">R$ 221,32</li>
              <li>31/05/2023</li>
            </div>
          </div>
        </li>
        <li className="w-[570px] h-auto bg-green-400 p-3 rounded lg:">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between mr-1 text-left">
              <li className="font-bold">Salário</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem fugiat qui quibusdam nisi delectus!
              </li>
            </div>
            <div className="flex flex-col justify-between mr-1 text-right">
              <li className="font-bold">R$ 2697,23</li>
              <li>05/05/2023</li>
            </div>
          </div>
        </li>
        <li className="w-[570px] h-auto bg-red-400 p-3 rounded">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between mr-1 text-left">
              <li className="font-bold">Conta de Internet</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem fugiat qui quibusdam nisi delectus!
              </li>
            </div>
            <div className="flex flex-col justify-between mr-1 text-right">
              <li className="font-bold">R$ 121,00</li>
              <li>28/05/2023</li>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
