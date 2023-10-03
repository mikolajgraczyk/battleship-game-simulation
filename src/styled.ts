import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-between;
  margin-top: 24px;
  padding: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.361);
  backdrop-filter: blur(10px);
  color: white;
  transition: 0.75s;
  -webkit-box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 420px) {
    padding: 16px 8px;
  }

  ${({ lastAction }) =>
    lastAction === "hit" &&
    css`
      background: rgba(140, 0, 0, 0.6);
    `}

  ${({ lastAction }) =>
    lastAction === "player2Won" &&
    css`
      background: linear-gradient(
        90deg,
        rgba(140, 0, 0, 0.6) 20%,
        rgba(0, 140, 0, 0.6) 100%
      );
    `}

    ${({ lastAction }) =>
    lastAction === "player1Won" &&
    css`
      background: linear-gradient(
        270deg,
        rgba(140, 0, 0, 0.6) 20%,
        rgba(0, 140, 0, 0.6) 100%
      );
    `}
`;
