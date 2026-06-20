import Header from "@/components/Header";
import BoardGrid from "@/components/board/BoardGrid";
import boardHeader from "@/public/headers/boardHeader.webp";
import mobileHeader from "@/public/mobileHeaders/mobileBoard.webp";

const Board = () => {
  return (
    <div>
      <Header
        title="Executive Board"
        image={boardHeader}
        mobileImage={mobileHeader}
        subtitle="25-26"
      />
      <BoardGrid />
    </div>
  );
};

export default Board;
