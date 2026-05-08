import Link from "next/link";

interface EventProps {
  name: string;
  description: string;
  date: string;
  location: string;
  time: string;
}

const EventCard = ({ name, description, date, location, time }: EventProps) => (
  <div className="mb-6 text-xl">
    <div className="text-bmes-blue-300 text-4xl font-semibold">{name}</div>
    <div className="text-bmes-blue-100">{description}</div>
    <div className="text-bmes-blue-100">When: {date}</div>
    <div className="text-bmes-blue-100">
      Where:{" "}
      <Link href="https://zoom.com" target="_blank" className="underline">
        {location}
      </Link>
    </div>
    <div className="text-bmes-blue-100">Time: {time}</div>
  </div>
);

export default EventCard;
