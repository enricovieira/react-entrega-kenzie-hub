import { useForm } from "react-hook-form";
import { Form } from "./style";
import { useContext } from "react";
import { RequisitionsContext } from "../../contexts/RequisitionsContext";
const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const { Login } = useContext(RequisitionsContext);

  return (
    <Form onSubmit={handleSubmit(Login)}>
      <label htmlFor="email">Email</label>
      <input placeholder="Digite seu email" {...register("email")} />
      <label htmlFor="password">Senha</label>
      <input type="password" placeholder="********" {...register("password")} />
      <button type="submit">Entrar</button>
    </Form>
  );
};

export default LoginForm;
