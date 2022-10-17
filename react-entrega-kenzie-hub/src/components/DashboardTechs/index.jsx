import { Container } from "./style";

const DashboardTechs = ({ userTechs, setIsModal }) => {
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
                  <button>remover</button>
                </div>
              </li>
            ))
          : null}
        {/* {userResponse.techs.map((tech) => (
          <li key={tech.id}>
            <h2>{tech.title}</h2>
            <div>
              <span>{tech.status}</span>
              <button>remover</button>
            </div>
          </li>
        ))} */}
      </ul>
    </Container>
  );
};

export default DashboardTechs;
