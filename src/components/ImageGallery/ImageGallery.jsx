// import { useState } from "react";
const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((post) => (
          <li key={post.objectID}>
            <img src={post.urls.small} alt="Picture">
              {post.title}
            </img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
