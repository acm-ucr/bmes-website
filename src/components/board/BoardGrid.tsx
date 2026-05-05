import BoardCard from "./BoardCard";
import boardInfo from "@/data/board";

const BoardGrid = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-x-20 gap-y-16 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {boardInfo.map(({ name, image, position, emailLink, about }, index) => (
        <div key={name} className={index === 16 ? "lg:col-start-2" : ""}>
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
