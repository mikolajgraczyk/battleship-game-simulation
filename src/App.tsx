import Board from "./Board";
import { useGameScripts } from "./useGameScripts";
import { StyledMain } from "./styled";

type Board = string[][];
interface PlayerState {
  board: Board;
  destroyed: number;
}

function App() {
  const { player1State, player2State } = useGameScripts();

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
