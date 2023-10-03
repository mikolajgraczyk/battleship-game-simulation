import { setup } from "./setup";

type Board = string[][];

export const useGenerateBoard = (): (() => Board) => {
  const generateBoard = (): Board => {
    return Array(setup.rows)
      .fill("empty")
      .map(() => Array(setup.cols).fill("empty"));
  };

  return generateBoard;
};
