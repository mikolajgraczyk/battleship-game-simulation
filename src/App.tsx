import { useState } from "react";
import Board from "./Board";
import { useGenerateBoard } from "./useGenerateBoard";
import { StyledMain } from "./styled";

type Board = string[][];
interface PlayerState {
  board: Board;
  destroyed: number;
}

function App() {
  const placeShips = useGenerateBoard();
  const initializePlayerState = (): PlayerState => {
    return {
      board: placeShips(),
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
        <Board board={player1State.board} />
      </div>
      <div>
        <Board board={player2State.board} />
      </div>
    </StyledMain>
  );
}

export default App;
