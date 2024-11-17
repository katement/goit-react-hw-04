import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageCard from "./components/ImageCard/ImageCard";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./services/api";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { hits } = await fetchImages();
        setImages(hits);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <SearchBar />
      <Loader />
      <ImageGallery images={images} />
      <ImageCard />
      <ErrorMessage />
      <ImageModal />
      <LoadMoreBtn />
    </div>
  );
};

export default App;
