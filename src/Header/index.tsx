import { useContext } from "react";
import { stateContext } from "../App";
import { StyledHeader, HeaderSection, Info } from "./styled";
import { StateContext } from "../interfaces";
import { hitsToWin } from "../setup";

const Header: React.FC = () => {
  const { gameState, player1State, player2State } =
    useContext<StateContext>(stateContext);

  return (
    <>
      <Info>Player needs {hitsToWin} points to win</Info>
      <StyledHeader lastAction={gameState.lastAction}>
        <HeaderSection>Player 1</HeaderSection>
        <HeaderSection>
          {player2State.destroyed} : {player1State.destroyed}
        </HeaderSection>
        <HeaderSection>Player 2</HeaderSection>
      </StyledHeader>
    </>
  );
};

export default Header;
