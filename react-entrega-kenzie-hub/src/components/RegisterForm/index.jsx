import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,20}$",
        "Senha Inválida"
      ),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatóio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="name">Nome</label>
      <input placeholder="Digite aqui seu nome" {...register("name")} />
      <p>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input placeholder="Digite aqui seu email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <label htmlFor="password">Senha</label>
      <input placeholder="Digite aqui sua senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <label htmlFor="passwordConfirm">Confirmar senha</label>
      <input name="passwordConfirm" placeholder="Confirme sua senha" />
      <label htmlFor="bio">Bio</label>
      <input placeholder="Fale sobre você" {...register("bio")} />
      <p>{errors.bio?.message}</p>
      <label htmlFor="contact">Contato</label>
      <input placeholder="Opção de contato" {...register("contact")} />
      <p>{errors.contact?.message}</p>
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
