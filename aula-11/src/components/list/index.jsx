export default function List() {
  return (
    <div className="md:p-10 sm:p-0">
      <h2 className="mb-2 font-bold">Itens</h2>
      <ul className="flex flex-col justify-center gap-5">
        <li>
          <div className="w-[570px] bg-red-400 p-3 rounded">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between mr-1 text-left">
                <span className="font-bold">Conta de Luz</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem fugiat qui quibusdam nisi delectus!
                </span>
              </div>
              <div className="flex flex-col justify-between mr-1 text-right">
                <span className="font-bold">R$ 221,32</span>
                <span>31/05/2023</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="w-[570px] h-auto bg-green-400 p-3 rounded lg:">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between mr-1 text-left">
                <span className="font-bold">Salário</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem fugiat qui quibusdam nisi delectus!
                </span>
              </div>
              <div className="flex flex-col justify-between mr-1 text-right">
                <span className="font-bold">R$ 2697,23</span>
                <span>05/05/2023</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="w-[570px] h-auto bg-red-400 p-3 rounded">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between mr-1 text-left">
                <span className="font-bold">Conta de Internet</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem fugiat qui quibusdam nisi delectus!
                </span>
              </div>
              <div className="flex flex-col justify-between mr-1 text-right">
                <span className="font-bold">R$ 121,00</span>
                <span>28/05/2023</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
