import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=hgGn5OgvgI2rWZ92YAJblvjCWbxiTvH065MriHtQBdg&query=${query}&page=${page}`
  );
  return response.data;
};
