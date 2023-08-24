import { createContext, useEffect, useState } from "react";
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
interface iSubmitData {
  title: string;
  status: string;
}

interface iRequisition {
  Login: (data: iLoginData) => void;
  Register: (data: iRegisterData) => void;
  GetProfile: () => void;
  userTechs: any[];
  setUserTechs: React.Dispatch<React.SetStateAction<any[]>>;
  userResponse: any;
  setUserResponse: React.Dispatch<React.SetStateAction<any>>;
  DeleteTech: (id: string) => void;
  PostTech: (data: iSubmitData) => void;
}

export const RequisitionsContext = createContext({} as iRequisition);

export const RequisitionsProvider = ({ children }: iRequisitionContext) => {
  const navigate = useNavigate();

  const [userTechs, setUserTechs] = useState([] as any);
  const user = window.localStorage.getItem("authToken");
  const [userResponse, setUserResponse] = useState<any>({});

  const GetProfile = async () => {
    try {
      const response = await axios.get(
        "https://kenziehub.herokuapp.com/profile",
        {
          headers: {
            authorization: `Bearer ${user}`,
          },
        }
      );
      setUserResponse(response.data);
      setUserTechs(response.data.techs);
    } catch (err) {
    }
  };

  const DeleteTech = (id: string) => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${user}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia deletada com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetProfile();
  }, [userTechs]);

  const PostTech = (data: iSubmitData) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: {
          authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        setUserTechs([...userTechs, res.data]);
        toast.success("Tecnologia Adicionada com sucesso!");
      })
      .catch(() => toast.error("Ops, você já cadastrou essa tecnologia!"));
  };

  const Login = async (data: iLoginData) => {
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        setUserResponse(res.data.user)
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
        toast.success("Cadastro realizado.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <RequisitionsContext.Provider
      value={{
        Login,
        Register,
        GetProfile,
        setUserTechs,
        userTechs,
        userResponse,
        setUserResponse,
        DeleteTech,
        PostTech,
      }}
    >
      {children}
    </RequisitionsContext.Provider>
  );
};
