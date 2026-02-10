import "./EventCard.css";

export default function EventCard({ eventItem }) {
  const date = eventItem?.datetime ? new Date(eventItem.datetime) : null;
  const readableDate = date ? date.toLocaleString() : "Date TBD";

  const venue = eventItem?.venue?.name || "Venue TBD";
  const city = eventItem?.venue?.city || "";
  const region = eventItem?.venue?.region || "";
  const country = eventItem?.venue?.country || "";
  const location = [city, region, country].filter(Boolean).join(", ");

  const ticketUrl = eventItem?.offers?.[0]?.url;

  return (
    <li className="event">
      <article className="event__card">
        <h2 className="event__title">{venue}</h2>
        <p className="event__meta">{readableDate}</p>
        <p className="event__meta">{location}</p>

        {ticketUrl && (
          <a className="event__link" href={ticketUrl} target="_blank" rel="noreferrer">
            Tickets
          </a>
        )}
      </article>
    </li>
  );
}
