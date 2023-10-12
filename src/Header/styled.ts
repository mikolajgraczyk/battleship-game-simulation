import styled, { css } from "styled-components";
import { LastAction } from "../interfaces";

export const StyledHeader = styled.main<{lastAction: LastAction | null}>`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  justify-content: space-between;
  margin-top: 4px;
  padding: 24px 32px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.361);
  backdrop-filter: blur(10px);
  color: white;
  transition: 0.5s;
  -webkit-box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 42px -12px rgba(0, 0, 0, 0.75);

  @media(max-width: 420px){
    padding: 16px 12px;
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

export const HeaderSection = styled.div`
  font-size: 28px;
  font-weight: 600;

  @media(max-width: 950px){
    font-size: 20px;
  }

  @media(max-width: 420px){
    font-size: 16px;
  }

  &:nth-child(2) {
    text-align: center;
    font-weight: 400;
  }

  &:nth-child(3) {
    text-align: right;
  }
`;

export const Info = styled.span`
  position: absolute;
  top: 0;
`;