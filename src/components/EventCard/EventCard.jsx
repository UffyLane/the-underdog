import "./EventCard.css";

export default function EventCard({ eventItem }) {
  const name = eventItem?.name;
  const date = eventItem?.dates?.start?.localDate;

  const venue = eventItem?._embedded?.venues?.[0]?.name;
  const city = eventItem?._embedded?.venues?.[0]?.city?.name;
  const state = eventItem?._embedded?.venues?.[0]?.state?.stateCode;

  const ticketUrl = eventItem?.url;

  return (
    <li className="event">
      <article className="event__card">
        <h2 className="event__title">{name}</h2>
        <p className="event__meta">
          {date} — {venue}
        </p>
        <p className="event__meta">
          {city}, {state}
        </p>

        {ticketUrl && (
          <a
            className="event__link"
            href={ticketUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Tickets
          </a>
        )}
      </article>
    </li>
  );
}
