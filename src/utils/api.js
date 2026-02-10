import { BANDSINTOWN_BASE_URL, BANDSINTOWN_APP_ID } from "./constants";

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(new Error(`Request failed: ${res.status}`));
  }
  return res.json();
};

export const getArtistEvents = (artistName) => {
  const encodedArtist = encodeURIComponent(artistName.trim());

  return fetch(
    `${BANDSINTOWN_BASE_URL}/artists/${encodedArtist}/events?app_id=${BANDSINTOWN_APP_ID}`
  )
    .then(checkResponse)
    .catch((err) => {
      throw err;
    });
};
