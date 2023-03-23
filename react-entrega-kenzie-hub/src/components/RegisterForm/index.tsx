import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./style";
import { useContext } from "react";
import {
  iRegisterData,
  RequisitionsContext,
} from "../../contexts/RequisitionsContext";

const RegisterForm = () => {
  const { Register } = useContext(RequisitionsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup.string().required("Senha é obrigatória").min(8, 'Deve conter no mínimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
    .matches(/[0-9]/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter ao menos um caracter especial'),
    passwordConfirm: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatóio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(schema),
  });

  const modules = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];

  return (
    <Form onSubmit={handleSubmit(Register)}>
      <label htmlFor="name">Nome</label>
      <input placeholder="Digite aqui seu nome" {...register("name")} />
      <p>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input placeholder="Digite aqui seu email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <label htmlFor="passwordConfirm">Confirmar senha</label>
      <input
        placeholder="Confirme sua senha"
        {...register("passwordConfirm")}
      />
      <p>{errors.passwordConfirm?.message}</p>
      <label htmlFor="bio">Bio</label>
      <input placeholder="Fale sobre você" {...register("bio")} />
      <p>{errors.bio?.message}</p>
      <label htmlFor="contact">Contato</label>
      <input placeholder="Opção de contato" {...register("contact")} />
      <p>{errors.contact?.message}</p>
      <label htmlFor="modules">Selecionar módulo</label>
      <select {...register("course_module")}>
        {modules.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <button type="submit">Cadastrar</button>
    </Form>
  );
};

export default RegisterForm;
