import { useEffect, useState } from "react";
import Cards from "./components/cards";
import LeftSide from "./components/leftside";
import "./styles.scss";
import { getTodos } from "./requests/todos";

import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="main-container">
      <LeftSide />
      <Cards />
    </div>
  );
}
