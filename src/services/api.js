import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get(
    "https://hn.algolia.com/api/v1/search?qury=react"
  );
  return response.data;
};
