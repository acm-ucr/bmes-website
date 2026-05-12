import BoardCard from "./BoardCard";
import boardInfo from "@/data/board";

const BoardGrid = () => {
  const columns = 4;
  const itemsInLastRow = boardInfo.length % columns;
  const firstItemInLastRow = boardInfo.length - itemsInLastRow;

  const getLastRowClass = (index: number) => {
    if (itemsInLastRow === 0 || index !== firstItemInLastRow) {
      return "";
    }

    if (itemsInLastRow === 1) {
      return "lg:col-span-4";
    }

    if (itemsInLastRow === 2) {
      return "lg:col-start-2";
    }

    return "";
  };

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-x-20 gap-y-16 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {boardInfo.map(({ name, image, position, emailLink, about }, index) => (
        <div key={name} className={getLastRowClass(index)}>
          <BoardCard
            name={name}
            image={image}
            position={position}
            emailLink={emailLink}
            about={about}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardGrid;
