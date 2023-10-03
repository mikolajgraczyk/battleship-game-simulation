import { Setup } from "./interfaces";

export const setup: Setup = {
  rows: 10,
  cols: 10,
  ships: [5, 4, 3, 2, 1],
};

export const hitsToWin: number = setup.ships.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
