import { Cell, StyledHitIcon } from "./styled";
import { generateAlphabetLetter } from "./generateAlphabetLetter";

type Board = string[][];

interface BoardProps {
  board: Board;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {board.map((row, rowIndex) => (
            <th key={rowIndex}>{generateAlphabetLetter(rowIndex)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {row.map((col, colIndex) => (
              <Cell key={colIndex} state={col}>
                {col === "hit" ? <StyledHitIcon /> : ""}
              </Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
