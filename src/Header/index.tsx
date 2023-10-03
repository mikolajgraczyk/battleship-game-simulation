import { StyledHeader, HeaderSection } from "./styled";

const Header: React.FC = ({ lastAction, player1State, player2State }) => {
  return (
    <StyledHeader lastAction={lastAction}>
      <HeaderSection>Player 1</HeaderSection>
      <HeaderSection>
        {player2State.destroyed} : {player1State.destroyed}
      </HeaderSection>
      <HeaderSection>Player 2</HeaderSection>
    </StyledHeader>
  );
};

export default Header;
