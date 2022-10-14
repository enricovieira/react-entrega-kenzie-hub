import axios from "axios";
import { Container, ContainerNav, Main, MainContainer } from "./style";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Profile from "../../components/Profile";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userResponse, setUserResponse] = useState({});
  const user = window.localStorage.getItem("authToken");

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: {
          authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        setUserResponse(res.data);
      });
  }, []);

  return (
    <>
      {user ? (
        <Container>
          <ContainerNav>
            <nav>
              <h1>Kenzie Hub</h1> <button onClick={logout}>Sair</button>
            </nav>
          </ContainerNav>
          <Profile userResponse={userResponse} />
          <Main>
            <MainContainer>
              <p>Que pena! Estamos em desenvolvimento :(</p>
              <span>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </span>
            </MainContainer>
          </Main>
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Dashboard;
