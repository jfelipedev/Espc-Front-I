import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";
import "../routes/styles/styles.scss";

function Login() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();  

  const { userLoginFunc } = useContext(MyContext);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const loginData ={
    login: "admin",
    password:"1234"
}

function entrar() {
  const { email, password } = userData;
  
  if (email === loginData.login && password === loginData.password) {
    userLoginFunc(email, password);
    navigate("/");
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
  return (
    <div className="container-login">
      <header className="header">
        <h1>Shop Products</h1>
      </header>
      <div className="wrapepr">
        <div className="login">
          <h2>Login</h2>
          <p>Insira seus dados para entrar no sistema</p>
          <form action="">
            <input
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              type="email"
              placeholder="E-mail"
            />{" "}
            <br />
            <input
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              type="password"
              placeholder="Senha"
            />
            <br />
            <button className="entrar-button" onClick={entrar}>
              Entrar
            </button>
          </form>
        </div>
      </div>
      <div className="footer">Todos os direitos reservados | {fullYear}</div>
    </div>
  );
}

export default Login;
