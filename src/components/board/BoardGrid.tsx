import BoardCard from "./BoardCard";
import boardInfo from "@/data/board";

const BoardGrid = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-x-20 gap-y-16 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {boardInfo.map((member, index) => (
        <div key={member.name} className={index === 16 ? "lg:col-start-2" : ""}>
          <BoardCard
            name={member.name}
            title={member.title}
            image={member.image}
            email={member.email}
            about={member.about}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardGrid;
