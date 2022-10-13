import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
  border: 1px solid var(--grey-3);
  border-radius: 4px;

  label {
    color: var(--grey-0);
    font-size: 0.8rem;
  }

  input {
    background-color: var(--grey-2);
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    padding: 15px 12px;
  }

  button {
    padding: 15px 10px;
    background-color: var(--primary);
    color: var(--grey-0);
    border: 1px solid var(--primary);
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--primary-focus);
  }
`;
