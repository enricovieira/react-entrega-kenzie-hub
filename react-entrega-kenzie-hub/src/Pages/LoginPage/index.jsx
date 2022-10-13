import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h1>Kenzie Hub</h1>
      <LoginForm />
      <p>ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </>
  );
};

export default LoginPage;
