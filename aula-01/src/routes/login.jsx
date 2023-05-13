import { useContext, useState } from "react";
import HeaderComp from "../components/header";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

function Login() {
  const { userLoginFunc } = useContext( MyContext );
 
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  function entrar() {
    userLoginFunc(userData.email, userData.password);
    navigate("/");
  }

  return (
    <>
      <HeaderComp />
      <div
        style={{
          backgroundColor: "#512DA8",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          color: "white",
        }}
      >
        <h2>Login</h2>
        <p>Insira seus dados para entrar no sistema</p>
        <form action="">
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            style={{ marginBottom: "20px" }}
            type="email"
            placeholder="digeite seu e-mail"
          />{" "}
          <br />
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            style={{ marginBottom: "20px" }}
            type="password"
            placeholder="digeite sua senha"
          />
          <br />
          <center>
            <button onClick={entrar}>Entrar</button>
          </center>
        </form>
      </div>
    </>
  );
}

export default Login;
