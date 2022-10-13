import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const modules = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="name">Nome</label>
      <input placeholder="Digite aqui seu nome" {...register("name")} />
      <label htmlFor="email">Email</label>
      <input placeholder="Digite aqui seu email" {...register("email")} />
      <label htmlFor="password">Senha</label>
      <input placeholder="Digite aqui sua senha" {...register("password")} />
      <label htmlFor="passwordConfirm">Confirmar senha</label>
      <input name="passwordConfirm" placeholder="Confirme sua senha" />
      <label htmlFor="bio">Bio</label>
      <input placeholder="Fale sobre você" {...register("bio")} />
      <label htmlFor="contact">Contato</label>
      <input placeholder="Opção de contato" {...register("contact")} />
      <label htmlFor="modules">Selecionar módulo</label>
      <select name="modules" {...register("course_module")}>
        {modules.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;
