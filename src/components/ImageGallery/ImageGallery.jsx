const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((post) => (
          <li key={post.objectID}>
            <img src={post.url} alt="Picture">
              {post.title}
            </img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
