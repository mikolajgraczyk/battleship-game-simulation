import styled, { css } from "styled-components";

interface CellProps {
  state: string;
}

export const Cell = styled.td<CellProps>`
  width: 32px;
  height: 32px;
  transition: 0.2s;

  ${({ state }) =>
    state === "empty" &&
    css`
      background-color: gray;
    `}

  ${({ state }) =>
    state === "ship" &&
    css`
      background-color: black;
    `}
`;
