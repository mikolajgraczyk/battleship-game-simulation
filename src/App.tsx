import Board from "./Board";
import { useGameScripts } from "./useGameScripts";
import { StyledMain } from "./styled";

type Board = string[][];

function App() {
  const { player1State, player2State, gameState } = useGameScripts();

  return (
    <StyledMain>
      <div>
        <Board board={player1State.board} lastAction={gameState.lastAction} />
      </div>
      <div>
        <Board board={player2State.board} lastAction={gameState.lastAction}/>
      </div>
    </StyledMain>
  );
}

export default App;
