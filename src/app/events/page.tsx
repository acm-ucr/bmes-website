import Header from "@/components/Header";
import eventsHeader from "@/public/headers/eventsHeader.webp";
import mobileEventsHeader from "@/public/mobileHeaders/mobileEvents.webp";
import Upcoming from "@/components/events/Upcoming";
import Calendar from "@/components/events/Calendar";

const Events = () => {
  return (
    <div>
      <Header
        title="Events"
        image={eventsHeader}
        mobileImage={mobileEventsHeader}
      />
      <Upcoming />
      <Calendar />
    </div>
  );
};

export default Events;
