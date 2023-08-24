import { Background, Modal } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { RequisitionsContext } from "../../contexts/RequisitionsContext";

interface iSubmitData {
  title: string;
  status: string;
}

interface iPostModalProps {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModal = ({ isModal, setModal }: iPostModalProps) => {
  const statusArray = ["Iniciante", "Intermediário", "Avançado"];
  const user = window.localStorage.getItem("authToken");

  const { PostTech } = useContext(RequisitionsContext);

  const { register, handleSubmit } = useForm<iSubmitData>();

  const onSubmitFunction = (data: iSubmitData) => {
    PostTech(data);
    setModal(false);
  };

  return (
    <>
      {isModal ? (
        <Background>
          <Modal>
            <header>
              <h2>Cadastrar Tecnologia</h2>
              <button onClick={() => setModal(false)}>Voltar</button>
            </header>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Nome da tecnologia"
                {...register("title")}
              />
              <label htmlFor="status">Selecionar Status</label>
              <select {...register("status")}>
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
