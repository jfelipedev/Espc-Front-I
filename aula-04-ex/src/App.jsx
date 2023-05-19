import Cards from "./components/cards";
import LeftSide from "./components/leftside";
import "./styles.scss";
import { getTodos } from "./requests/todos";

import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  console.log(data);

  return (
    <div className="main-container">
      <LeftSide />
      <div className="cards-container">
        <div className="title">
          <h2>Minhas Tarefas</h2> <h4>total de tarefas: {data ? data.length : 0}</h4>
        </div>
        {error ? (
          <p>Erro ao carregar os dados. Por favor, tente novamente mais tarde.</p>
        ) : (
          <>
            {data ? (
              data.map((item) => (
                <Cards
                  key={item._id}
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  date={item.date}
                />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
