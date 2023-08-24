import axios from "axios";
import { Container, ContainerNav, Main } from "./style";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DashboardTechs from "../../components/DashboardTechs";
import Profile from "../../components/Profile";
import PostModal from "../../components/PostModal";
import { RequisitionsContext } from "../../contexts/RequisitionsContext";

export interface iUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

const Dashboard = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);

  const {userResponse, userTechs} = useContext(RequisitionsContext)

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const user = window.localStorage.getItem("authToken");

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
            <DashboardTechs userTechs={userTechs} setIsModal={setIsModal} />
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
