import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RequisitionsContext = createContext({});

export const RequisitionsProvider = ({ children }) => {
  const navigate = useNavigate();

  const Login = async (data) => {
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Register = async (data) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <RequisitionsContext.Provider value={{ Login, Register }}>
      {children}
    </RequisitionsContext.Provider>
  );
};
