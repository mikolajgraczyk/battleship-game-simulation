import { createContext } from "react";
import Header from "./Header";
import Main from "./Main";
import { useGameScripts } from "./useGameScripts";
import { StateContext } from "./interfaces";

export const stateContext = createContext<StateContext>({} as StateContext);

function App() {
  const { player1State, player2State, gameState, restartGame } = useGameScripts();

  return (
    <stateContext.Provider value={{ gameState, player1State, player2State, restartGame }}>
      <Header />
      <Main />
    </stateContext.Provider>
  );
}

export default App;
