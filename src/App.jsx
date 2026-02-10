import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import { getArtistEvents } from "./utils/api";
import { MIDWEST_STATES } from "./utils/constants";

export default function App() {
  const [artistName, setArtistName] = useState("");
  const [events, setEvents] = useState([]); // array type ✅
  const [isLoading, setIsLoading] = useState(false); // boolean ✅
  const [errorMessage, setErrorMessage] = useState(""); // string ✅

  const midwestEvents = useMemo(() => {
    return events.filter((eventItem) => {
      const region = eventItem?.venue?.region;
      return region && MIDWEST_STATES.includes(region);
    });
  }, [events]);

  const handleSearch = (searchValue) => {
    setArtistName(searchValue);

    if (!searchValue) {
      setEvents([]);
      setIsLoading(false);
      setErrorMessage("");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
  };

  useEffect(() => {
    if (!artistName) return;

    getArtistEvents(artistName)
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setEvents([]);
        setErrorMessage("Something went wrong loading events. Try again.");
      })
      .finally(() => setIsLoading(false));
  }, [artistName]);

  return (
    <div className="page">
      <Header />

      <main className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSearch={handleSearch}
                isLoading={isLoading}
                errorMessage={errorMessage}
                events={midwestEvents}
                artistName={artistName}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
