import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <h1>Kenzie Hub</h1>
      <LoginForm />
      <p>ainda não possui uma conta?</p>
      <a href="/register">Cadastre-se</a>
    </>
  );
};

export default LoginPage;
