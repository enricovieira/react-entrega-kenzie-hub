import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="email">Email</label>
      <input placeholder="Digite seu email" {...register("email")} />
      <label htmlFor="password">Senha</label>
      <input type="password" placeholder="********" {...register("password")} />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
