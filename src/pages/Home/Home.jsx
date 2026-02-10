import SearchForm from "../../components/SearchForm/SearchForm";
import EventList from "../../components/EventList/EventList";
import Loader from "../../components/Loader/Loader";
import ErrorBanner from "../../components/ErrorBanner/ErrorBanner";
import "./Home.css";

export default function Home({ onSearch, isLoading, errorMessage, events, artistName }) {
  const showEmpty =
    artistName && !isLoading && !errorMessage && Array.isArray(events) && events.length === 0;

  return (
    <section className="home">
      <div className="home__header">
        <h1 className="home__title">The UnderDog</h1>
        <p className="home__subtitle">Find Midwest shows for the artists you love.</p>
      </div>

      <SearchForm onSearch={onSearch} />

      {isLoading && <Loader />}
      {errorMessage && <ErrorBanner message={errorMessage} />}

      {showEmpty && (
        <p className="home__empty">
          No upcoming Midwest events found for <span className="home__artist">{artistName}</span>.
        </p>
      )}

      {!isLoading && !errorMessage && events.length > 0 && <EventList events={events} />}
    </section>
  );
}
