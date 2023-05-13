import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext({});

// eslint-disable-next-line react/prop-types
const MyProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  useEffect(() => {
    const response = localStorage.getItem("@user_email, @user_password");

    if (response) {
      setUserEmail(response.email);
      setUserPassword(response.password);
    }
  }, []);

  function userLoginFunc(email, password) {
    setUserEmail(email);
    setUserPassword(password);
    localStorage.setItem("@user_email", email);
    localStorage.setItem("@user_password", password);
  }

  function logout() {
    navigate("/login");
    localStorage.clear();
  }

  return (
    <MyContext.Provider
      value={{ userEmail, userPassword, userLoginFunc, logout }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
