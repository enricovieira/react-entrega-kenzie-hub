import { Background, Modal } from "./style";

const statusArray = ["Iniciante", "Intermediário", "Avançado"];

const PostModal = ({ isModal, setModal }) => {
  return (
    <>
      {isModal ? (
        <Background>
          <Modal>
            <header>
              <h2>Cadastrar Tecnologia</h2>
              <button onClick={() => setModal(false)}>Voltar</button>
            </header>
            <form>
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Nome da tecnologia" />
              <label htmlFor="status">Selecionar Status</label>
              <select name="status">
                {statusArray.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
              <button>Cadastrar Tecnologia</button>
            </form>
          </Modal>
        </Background>
      ) : null}
    </>
  );
};

export default PostModal;
