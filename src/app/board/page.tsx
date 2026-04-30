import Header from "@/components/Header";
import BoardGrid from "@/components/board/BoardGrid";
import boardHeader from "@/public/headers/boardHeader.webp";

const Board = () => {
  return (
    <div>
      <Header title="Executive Board" image={boardHeader} subtitle="25-26" />
      <BoardGrid />
    </div>
  );
};

export default Board;