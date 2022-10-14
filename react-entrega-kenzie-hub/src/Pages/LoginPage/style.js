import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCenter = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 510px;
  max-width: 370px;

  h1 {
    color: var(--primary);
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  background-color: var(--grey-3);
  padding: 10px;
  height: 100%;
  border-radius: 8px;
  
  h2 {
    font-size: 0.9rem;
    color: var(--grey-0);
    text-align: center;
    margin-top: 15px;
  }

  p {
    margin-top: 40px;
    font-size: 0.8rem;
    color: var(--grey-1);
    text-align: center;
  }

  > button {
    background-color: var(--grey-1);
    width: 100%;
    margin-top: 20px;
    padding: 15px 10px;
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    color: var(--grey-0);
  }
`;
