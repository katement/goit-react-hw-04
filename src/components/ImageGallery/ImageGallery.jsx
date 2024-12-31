import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";
const ImageGallery = ({ images, onImageClick }) => {
  const kartinka = images.map((el) => el.urls.small);
  console.log(kartinka);
  return (
    <div className={s.containerList}>
      <ul className={s.list}>
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
