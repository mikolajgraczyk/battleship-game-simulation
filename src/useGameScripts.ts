import { useState, useEffect } from "react";
import { setup, hitsToWin } from "./setup";
import { useGenerateBoard } from "./useGenerateBoard";
import { Board, PlayerState, GameState, RandomMove } from "./interfaces";

const initialGameState: GameState = {
  isPlayer1Turn: true,
  lastAction: null,
  winner: null,
};

export const useGameScripts = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

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

  const getRandomMove = (board: Board): RandomMove => {
    let rowTarget: number, colTarget: number;

    do {
      rowTarget = Math.floor(Math.random() * setup.rows);
      colTarget = Math.floor(Math.random() * setup.cols);
    } while (
      board[rowTarget][colTarget] === "hit" ||
      board[rowTarget][colTarget] === "miss"
    );

    return { rowTarget, colTarget };
  };

  const handleShoot = (
    prevState: PlayerState,
    rowTarget: number,
    colTarget: number
  ): PlayerState => {
    const updatedBoard = [...prevState.board];

    if (prevState.board[rowTarget][colTarget] === "empty") {
      updatedBoard[rowTarget][colTarget] = "miss";

      setGameState((prevState) => ({
        ...prevState,
        lastAction: "miss",
      }));

      return {
        ...prevState,
        board: updatedBoard,
      };
    }

    if (prevState.board[rowTarget][colTarget] === "ship") {
      prevState.board[rowTarget][colTarget] = "hit";

      setGameState((prevState) => ({
        ...prevState,
        lastAction: "hit",
      }));

      return {
        ...prevState,
        board: updatedBoard,
        destroyed: prevState.destroyed + 1,
      };
    }

    return { ...prevState };
  };

  const togglePlayerTurn = (): void => {
    setGameState((prevState) => ({
      ...prevState,
      isPlayer1Turn: !prevState.isPlayer1Turn,
    }));
  };

  const restartGame = () => {
    setGameState(initialGameState);
    setPlayer1State(initializePlayerState);
    setPlayer2State(initializePlayerState);

    const intervalId = initializeMove();
    clearInterval(intervalId);
  };

  const initializeMove = (): NodeJS.Timer => {
    const intervalId = setInterval(() => {
      if (gameState.isPlayer1Turn) {
        const { rowTarget, colTarget } = getRandomMove(player2State.board);
        setPlayer2State((prevState) =>
          handleShoot(prevState, rowTarget, colTarget)
        );
        togglePlayerTurn();
        return;
      }

      const { rowTarget, colTarget } = getRandomMove(player1State.board);
      setPlayer1State((prevState) =>
        handleShoot(prevState, rowTarget, colTarget)
      );
      togglePlayerTurn();
    }, 1000);

    if (player1State.destroyed === hitsToWin) {
      clearInterval(intervalId);
      setGameState((prevState) => ({
        ...prevState,
        lastAction: "player2Won",
        winner: "player2",
      }));
    }

    if (player2State.destroyed === hitsToWin) {
      clearInterval(intervalId);
      setGameState((prevState) => ({
        ...prevState,
        lastAction: "player1Won",
        winner: "player1",
      }));
    }

    return intervalId;
  };

  useEffect(() => {
    const intervalId = initializeMove();

    return () => clearInterval(intervalId);
  }, [gameState.isPlayer1Turn]);

  return { player1State, player2State, gameState, restartGame };
};
