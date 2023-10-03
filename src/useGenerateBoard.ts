import { setup } from "./setup";
import { Board, IsValidPosition } from "./interfaces";


export const useGenerateBoard = (): (() => Board) => {
  const generateBoard = (): Board => {
    return Array(setup.rows)
      .fill("empty")
      .map(() => Array(setup.cols).fill("empty"));
  };

  const placeShips = (): Board => {
    let board = generateBoard();

    setup.ships.forEach((shipLength) => {
      generateShip(board, shipLength);
    });

    return board;
  };

  const generateShip = (board: Board, shipLength: number): void => {
    let startRow: number, startCol: number, isHorizontal: boolean;

    do {
      startRow = Math.floor(Math.random() * setup.rows);
      startCol = Math.floor(Math.random() * setup.cols);
      isHorizontal = Math.random() < 0.5;
    } while (
      !isValidPosition(startRow, startCol, isHorizontal, shipLength, board)
    );

    for (let i = 0; i < shipLength; i++) {
      const row: number = isHorizontal ? startRow : startRow + i;
      const col: number = isHorizontal ? startCol + i : startCol;
      board[row][col] = "ship";
    }
  };

  const isValidPosition: IsValidPosition = (
    startRow,
    startCol,
    isHorizontal,
    shipLength,
    board
  ): boolean => {
    if (isHorizontal) {
      if (startCol + shipLength > setup.cols) {
        return false;
      }

      for (let i = 0; shipLength > i; i++) {
        if (board[startRow][startCol + i] !== "empty") {
          return false;
        }
      }
    }
    if (startRow + shipLength > setup.rows) {
      return false;
    }

    for (let i = 0; shipLength > i; i++) {
      if (board[startRow + i][startCol] !== "empty") {
        return false;
      }
    }

    return true;
  };

  return placeShips;
};
