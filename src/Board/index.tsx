import { Cell } from "./styled";

type Board = string[][];

interface BoardProps {
  board: Board;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <Cell key={colIndex} state={col}></Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
