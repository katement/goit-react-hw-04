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
import ImageCard from "./components/ImageCard/ImageCard";
// import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage]=useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (totalPages === page) {
      toast.success("You have downloaded everything");
    }
  }, [totalPages, page]);

  useEffect(() => {
    if (!query) return;
    console.log(page, query);
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
        console.log(results, total_pages);
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

  const handleImageClick=(image)=>{
    setSelectedImage(image);
    setIsOpenModal(true)
  }
  const handleCloseModal=()=>{
    setIsOpenModal(false)
    setSelectedImage(null)
  }

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {page < totalPages && (
        <button onClick={() => setPage((prev) => prev + 1)}> Load More </button>
      )}
      {isLoading && <Loader />}
      {images.length >0 &&(<ImageGallery images={images} onImageClick={handleImageClick} />)}
      {isOpenModal && <ImageCard />}
      {isError && <ErrorMessage />}
      {isOpenModal&&(<ImageModal selectedImage={selectedImage} onClose={handleCloseModal}/>)}
      {/* <button onClick={() => setIsOpenModal(!isOpenModal)}>OPEN</button> */}
    </div>
  );
};

export default App;
