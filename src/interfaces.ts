export type Board = string[][];

export interface PlayerState {
  board: Board;
  destroyed: number;
}

export interface GameState {
  isPlayer1Turn: boolean;
  lastAction: string;
  winner: string;
}

export interface StateContext {
  player1State: PlayerState;
  player2State: PlayerState;
  gameState: GameState;
}

export interface Setup {
  rows: number;
  cols: number;
  ships: number[];
}

export interface BoardProps {
  board: Board;
}

export interface LastAction {
  lastAction: string;
}

export interface CellProps {
  state: string;
}
