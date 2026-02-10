import {
  TICKETMASTER_BASE_URL,
  TICKETMASTER_API_KEY,
} from "./constants";

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }
  return res.json();
};

export const searchEvents = (artistName) => {
  return fetch(
    `${TICKETMASTER_BASE_URL}/events.json?apikey=${TICKETMASTER_API_KEY}&keyword=${artistName}`
  ).then(checkResponse);
};
