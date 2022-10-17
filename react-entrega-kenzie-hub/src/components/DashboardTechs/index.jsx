import { Container } from "./style";
import axios from "axios";

const DashboardTechs = ({ userTechs, setIsModal }) => {
  const user = window.localStorage.getItem("authToken");

  const deleteTech = (id) => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
                    onClick={(event) => deleteTech(event.target.id)}
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
