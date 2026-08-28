import Header from "@/components/Header";
import eventsHeader from "@/public/headers/eventsHeader.webp";
import Upcoming from "@/components/events/Upcoming";
import Calendar from "@/components/events/Calendar";

const Events = () => {
  return (
    <div>
      <Header title="Events" image={eventsHeader} />
      <Upcoming />
      <Calendar />
    </div>
  );
};

export default Events;
