import { useContext } from "react";
import { stateContext } from "../App";
import Board from "../Board";
import { StyledMain, RestartButton } from "./styled";
import { StateContext } from "../interfaces";
import { ReactComponent as RestartIcon } from "./RestartIcon.svg";

const Main: React.FC = () => {
  const { gameState, player1State, player2State, restartGame } =
    useContext<StateContext>(stateContext);

  return (
    <StyledMain lastAction={gameState.lastAction}>
      <div>
        <Board board={player1State.board} />
      </div>
      <RestartButton onClick={() => restartGame()}><RestartIcon /></RestartButton>
      <div>
        <Board board={player2State.board} />
      </div>
    </StyledMain>
  );
};

export default Main;
