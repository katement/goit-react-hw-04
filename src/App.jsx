import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageCard from "./components/ImageCard/ImageCard";
// import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./services/api";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("cat");
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState(0);
  useEffect(() => {
    if (total_pages === page) {
      toast.success("You have downloaded everything");
    }
  }, [total_pages, page]);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(0);
    // toast.error("Query changed");
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {total_pages > page && (
        <button onClick={() => setPage((prev) => prev + 1)}> Load More </button>
      )}
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {/* <ImageCard /> */}
      {isError && <ErrorMessage />}
      {/* <ImageModal /> */}
    </div>
  );
};

export default App;
