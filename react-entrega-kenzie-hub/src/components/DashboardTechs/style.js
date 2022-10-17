import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  width: 80%;
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--grey-0);
  gap: 15px;

  header {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }

  header > button {
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 1.4rem;
    font-weight: 600;
    padding: 2px 10px;
    border: none;
    border-radius: 4px;
  }

  ul {
    background-color: var(--grey-3);
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 4px;
    overflow-y: scroll;
  }

  li {
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    transition: 0.3s ease-in-out;
    border-radius: 4px;
  }

  li:hover {
    background-color: var(--grey-2);
  }

  li:hover div > span {
    color: var(--grey-0);
  }

  li > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  li > h2 {
    font-size: 0.9rem;
  }

  li > div > span {
    color: var(--grey-1);
    font-size: 0.8rem;
    transition: 0.3s ease-in-out;
  }

  li > div > button {
    background-color: var(--grey-3);
    color: var(--grey-0);
    padding: 5px 7px;
    border: none;
    border-radius: 4px;
  }
`;
