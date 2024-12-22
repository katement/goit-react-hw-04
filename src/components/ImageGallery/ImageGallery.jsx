import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id} >
            <ImageCard 
            results={image}
            onClick={()=>onImageClick(image)}
            // src={post.urls.small ?? post.slug} alt="Picture">
            //   {post.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
