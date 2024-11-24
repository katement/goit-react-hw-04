import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=hgGn5OgvgI2rWZ92YAJblvjCWbxiTvH065MriHtQBdg&page=${page}&query=${query}&total_pages=15`
  );
  return response.data;
};
