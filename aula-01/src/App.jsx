import { Outlet } from "react-router-dom";
import HeaderComp from "./components/header";
import "./index.scss";

function App() {
  return (
    <>
      <HeaderComp />
      <Outlet />
    </>
  );
}

export default App;
