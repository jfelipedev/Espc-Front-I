import { useNavigate } from "react-router-dom";
import ShopProductsComp from "../components/shopProductsComp";

function Home() {
  const navigate = useNavigate();
  let isLogged = false;

  if (!isLogged) {
    navigate("/login");
  }

  return (
    <>
      <ShopProductsComp />
    </>
  );
}

export default Home;
