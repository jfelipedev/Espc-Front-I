import "./styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

function HeaderComp() {
  const { userEmail, logout } = useContext(MyContext);

  return (
    <nav className="header-home">
      <div className="page-title">
      <Link to="/">
        <h1>Shop Products</h1>
      </Link>
      </div>
      <div className="userGreeting">
        <h3>{userEmail}</h3>
      <button className="deslogar-button" onClick={logout}>Sair</button>
      </div>
    </nav>
  );
}

export default HeaderComp;
