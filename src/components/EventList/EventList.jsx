import EventCard from "../EventCard/EventCard";
import "./EventList.css";

export default function EventList({ events }) {
  return (
    <section className="events" aria-label="Events">
      <ul className="events__list">
        {events.map((eventItem) => (
          <EventCard key={eventItem.id} eventItem={eventItem} />
        ))}
      </ul>
    </section>
  );
}
