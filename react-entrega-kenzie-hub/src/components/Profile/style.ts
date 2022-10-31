import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid var(--grey-3);
`;

export const HeaderContainer = styled.header`
  width: 80%;
  height: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--grey-0);

  h2 {
    font-size: 1.2rem;
  }

  span {
    color: var(--grey-1);
    font-size: 0.8em;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
