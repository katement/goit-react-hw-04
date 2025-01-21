// import stub from "../../assets/react.svg";
import s from "../ImageCard/ImageCard.module.css";


const ImageCard = ({ image, onClick }) => {
  // const { urls, slug } = image;
  // console.log(results.urls.regular);
  if (image)
    return (
      <div className={s.card} onClick={() => onClick(image)}>
        <img  src={image?.urls?.small} alt={image.slug ?? "Image"} />
      </div>
    );
};

export default ImageCard;
