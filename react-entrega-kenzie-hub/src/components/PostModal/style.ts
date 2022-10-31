import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Modal = styled.div`
  width: 80%;
  height: 100%;
  background-color: var(--grey-4);
  max-height: 350px;
  max-width: 370px;

  header {
    background-color: var(--grey-2);
    color: var(--grey-0);
    display: flex;
    justify-content: space-between;
    padding: 8px 15px;
  }

  header > button {
    background-color: var(--grey-3);
    color: var(--grey-0);
    padding: 5px 7px;
    border: none;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 25px;
  }

  label {
    color: var(--grey-0);
    font-size: 0.8rem;
  }

  input {
    background-color: var(--grey-2);
    border: 2px solid var(--grey-0);
    border-radius: 4px;
    padding: 15px 12px;
  }
  select {
    background-color: var(--grey-2);
    border: 2px solid var(--grey-0);
    border-radius: 4px;
    padding: 15px 12px;
    color: var(--grey-0);
  }

  form > button {
    padding: 15px 10px;
    background-color: var(--primary);
    color: var(--grey-0);
    border: 1px solid var(--primary);
    border-radius: 4px;
  }

  form > button:hover {
    background-color: var(--primary-focus);
  }
`;
