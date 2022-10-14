import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import { Container, ContainerCenter, FormContainer } from "./style";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerCenter>
        <header>
          <h1>Kenzie Hub</h1>{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </button>
        </header>
        <FormContainer>
          <header>
            <h2>Crie sua Conta</h2>
            <span>Rápido e grátis, vamos nessa!</span>
          </header>
          <RegisterForm />
        </FormContainer>
      </ContainerCenter>
    </Container>
  );
};

export default RegisterPage;
