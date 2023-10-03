import { Cell } from "./styled";

type Board = string[][];

interface BoardProps {
  board: Board;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <table>
      <tbody>
        {board.map((row) => (
          <tr>
            {row.map((col, colIndex) => (
              <Cell></Cell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
