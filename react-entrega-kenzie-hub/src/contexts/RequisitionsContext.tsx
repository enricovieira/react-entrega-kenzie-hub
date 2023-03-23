import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iRequisitionContext {
  children: React.ReactNode;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iRequisition {
  Login: (data: iLoginData) => void;
  Register: (data: iRegisterData) => void;
}

export const RequisitionsContext = createContext({} as iRequisition);

export const RequisitionsProvider = ({ children }: iRequisitionContext) => {
  const navigate = useNavigate();

  const Login = async (data: iLoginData) => {
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) =>
        toast.error("Email ou senha inválidos.", {
          autoClose: 1000,
        })
      );
  };

  const Register = async (data: iRegisterData) => {
    await axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        toast.success('Cadastro realizado.')
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
