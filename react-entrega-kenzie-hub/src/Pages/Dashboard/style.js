import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--grey-3);

  nav {
    width: 80%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: var(--primary);
    font-size: 1.2rem;
  }

  nav > button {
    background-color: var(--grey-3);
    border: 1px solid transparent;
    color: var(--grey-0);
    padding: 8px 12px;
    border-radius: 4px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--grey-0);

  > p {
    font-size: 1.2rem;
    font-weight: 700;
  }

  > span {
    margin-top: 20px;
    font-size: 1rem;
  }
`;
