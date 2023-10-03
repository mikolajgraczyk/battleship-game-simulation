import { useState } from "react";
import Board from "./Board";
import { StyledMain } from "./styled";

interface Setup {
  rows: number;
  cols: number;
  ships: number[];
}

type Board = string[][];
interface PlayerState {
  board: Board;
  destroyed: number;
}

const setup: Setup = {
  rows: 10,
  cols: 10,
  ships: [5, 4, 3, 2, 1],
};

function App() {
  const generateBoard = (): Board => {
    return Array(setup.rows)
      .fill("empty")
      .map(() => Array(setup.cols).fill("empty"));
  };

  const initializePlayerState = (): PlayerState => {
    return {
      board: generateBoard(),
      destroyed: 0,
    };
  };

  const [player1State, setPlayer1State] = useState<PlayerState>(
    initializePlayerState
  );
  const [player2State, setPlayer2State] = useState<PlayerState>(
    initializePlayerState
  );

  return (
    <StyledMain>
      <div>
        <Board board={player1State.board}/>
      </div>
      <div>
        <Board board={player2State.board}/>
      </div>
    </StyledMain>
  );
}

export default App;
