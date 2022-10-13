import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      })
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
