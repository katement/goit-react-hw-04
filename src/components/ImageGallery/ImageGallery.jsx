import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ images, onImageClick }) => {
  const kartinka = images.map((el) => el.urls.small);
  console.log(kartinka);
  return (
    <div>
      <ul>
        {images.map((image, index) => {
          console.log(image);
          return (
            <li key={index}>
              <ImageCard image={image} onClick={onImageClick} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
