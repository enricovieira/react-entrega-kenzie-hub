import axios from "axios";
import { Container, ContainerNav, Main } from "./style";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DashboardTechs from "../../components/DashboardTechs";
import Profile from "../../components/Profile";
import PostModal from "../../components/PostModal";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);

  const [userResponse, setUserResponse] = useState({});
  const [userTechs, setUserTechs] = useState([])
  const user = window.localStorage.getItem("authToken");

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(
          "https://kenziehub.herokuapp.com/profile",
          {
            headers: {
              authorization: `Bearer ${user}`,
            },
          }
        );
        setUserResponse(response.data);
        setUserTechs(response.data.techs)
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
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
            <DashboardTechs
              userTechs={userTechs}
              setIsModal={setIsModal}
            />
          </Main>
          <PostModal isModal={isModal} setModal={setIsModal} />
        </Container>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Dashboard;
