import { useContext } from "react";
import { Container } from "./style";
import axios from "axios";
import { RequisitionsContext } from "../../contexts/RequisitionsContext";

interface iUserTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface iDashboardProps {
  userTechs: iUserTechs[];
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardTechs = ({ userTechs, setIsModal }: iDashboardProps) => {
  const user = window.localStorage.getItem("authToken");

  const { DeleteTech } = useContext(RequisitionsContext);

  return (
    <Container>
      <header>
        <h3>Tecnologias</h3>
        <button onClick={() => setIsModal(true)}>+</button>
      </header>
      <ul>
        {userTechs.length
          ? userTechs.map((tech) => (
              <li key={tech.id}>
                <h2>{tech.title}</h2>
                <div>
                  <span>{tech.status}</span>
                  <button
                    id={tech.id}
                    onClick={(event) =>
                      DeleteTech((event.target as HTMLInputElement).id)
                    }
                  >
                    remover
                  </button>
                </div>
              </li>
            ))
          : null}
      </ul>
    </Container>
  );
};

export default DashboardTechs;
