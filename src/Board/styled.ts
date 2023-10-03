import styled, { css } from "styled-components";
import { ReactComponent as HitIcon } from "./HitIcon.svg";

interface CellProps {
  state: string;
}

export const Cell = styled.td<CellProps>`
  width: 32px;
  height: 32px;
  transition: 0.3s;

  @media (max-width: 950px) {
    width: 26px;
    height: 26px;
  }

  @media(max-width: 420px){
    width: 16px;
    height: 16px;
  }

  ${({ state }) =>
    state === "empty" &&
    css`
      background-color: rgba(43, 101, 236);
    `};

  ${({ state }) =>
    state === "ship" &&
    css`
      background-color: rgb(40, 40, 40);
    `};

  ${({ state }) =>
    state === "miss" &&
    css`
      background-color: rgba(160, 177, 215, 0.5);
    `};

  ${({ state }) =>
    state === "hit" &&
    css`
      background-color: #282828;
    `};
`;

export const StyledHitIcon = styled(HitIcon)`
  width: 70%;
  height: 70%;
  display: block;
  margin: 0 auto;
`;

export const StyledTd = styled.td`
  text-align: center;
  font-size: 12px;
`;
