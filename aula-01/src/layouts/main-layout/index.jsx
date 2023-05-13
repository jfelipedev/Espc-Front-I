import { Outlet } from "react-router-dom";
import HeaderComp from "../../components/header";

function MainLayout() {
  return (
    <>
      <HeaderComp />
      <Outlet />
    </>
  );
}

export default MainLayout;
