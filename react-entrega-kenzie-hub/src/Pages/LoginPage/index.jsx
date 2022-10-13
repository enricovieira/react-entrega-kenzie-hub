import LoginForm from "../../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { Container, ContainerCenter, FormContainer, LinkStyled } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerCenter>
        <h1>Kenzie Hub</h1>
        <FormContainer>
          <h2>Login</h2>
          <LoginForm />
          <p>ainda não possui uma conta?</p>
          <button
            onClick={() => {
              navigate("register");
            }}
          >
            Cadastre-se
          </button>
        </FormContainer>
      </ContainerCenter>
    </Container>
  );
};

export default LoginPage;
