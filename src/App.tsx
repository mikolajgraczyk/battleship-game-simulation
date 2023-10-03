import Board from "./Board";
import { useGameScripts } from "./useGameScripts";
import { StyledMain } from "./styled";

type Board = string[][];

function App() {
  const { player1State, player2State, gameState } = useGameScripts();

  return (
    <StyledMain lastAction={gameState.lastAction}>
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
