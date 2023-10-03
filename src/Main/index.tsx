import { useContext } from "react";
import { stateContext } from "../App";
import Board from "../Board";
import { StyledMain } from "./styled";
import { StateContext } from "../interfaces";

const Main: React.FC = () => {
  const { gameState, player1State, player2State } = useContext<StateContext>(stateContext);

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
};

export default Main;
