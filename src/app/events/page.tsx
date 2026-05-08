import Header from "@/components/Header";
import eventsHeader from "@/public/headers/eventsHeader.webp";
import Upcoming from "@/components/events/Upcoming";

const Events = () => {
  return (
    <div>
      <Header title="Events" image={eventsHeader} />
      <Upcoming />
    </div>
  );
};

export default Events;
