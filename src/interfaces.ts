export type Board = ("empty" | "hit" | "miss" | "ship")[][];
export type LastAction = "hit" | "miss" | "player2Won" | "player1Won";

export interface PlayerState {
  board: Board;
  destroyed: number;
}

export interface GameState {
  isPlayer1Turn: boolean;
  lastAction: LastAction | null;
  winner: "player1" | "player2" | null;
}

export interface StateContext {
  player1State: PlayerState;
  player2State: PlayerState;
  gameState: GameState;
  restartGame: () => void;
}

export interface Setup {
  rows: number;
  cols: number;
  ships: number[];
}

export interface BoardProps {
  board: Board;
}

export interface RandomMove {
  rowTarget: number;
  colTarget: number;
}