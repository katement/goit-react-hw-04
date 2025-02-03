import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./services/api";
import { Toaster, toast } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // useEffect(() => {
  //   if (totalPages === page) {
  //     toast.success("You have downloaded everything");
  //   }
  // }, [totalPages, page]);

  useEffect(() => {
    if (!query) return;
    console.log(page, query);
    const getData = async () => {
      setIsLoading(true);
      setError(false);
      try {
        toast.loading("Loading images...", { id: "loading" });
        const response = await fetchImages(query, page);

        if ("error" in response) {
          setError(true);
          setHasMore(false);
          return console.log("Error!!!");
        }
        
        if (response.results.length === 0) {
          toast.error("No images found!");
          setHasMore(false);
          return;
        } else {
          setImages((prev) =>
            page === 0 ? response.results : [...prev, ...response.results]
          );
          setHasMore(response.results.length > 0);
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to load images.");
        setError(true);
      } finally {
        setIsLoading(false);
        toast.dismiss("loading");
      }
    };

    getData();
  }, [page, query]);

  // const handleChangeQuery = (query) => {
  //   setImages([]);
  //   setQuery(query);
  //   setPage(0);

  //   toast.error("Query changed");
  // };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedImage(null);
  };
  // console.log(images&& images[0].urls.small);
  return (
    <div className="App">
      <header>
        <SearchBar setQuery={setQuery} />
      </header>
      <main>
        {/* <Toaster>
          <Toaster position="top-center" reverseOrder={false} />
        </Toaster> */}

        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={handleImageClick} />
        )}
        {isLoading && <Loader />}

        {!isLoading && images.length > 0 && hasMore && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </main>

      {isOpenModal && (
        <ImageModal selectedImage={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
