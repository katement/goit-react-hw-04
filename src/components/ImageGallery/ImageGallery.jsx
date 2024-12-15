// import { useState } from "react";
const ImageGallery = ({ images, setIsOpenModal, isOpenModal }) => {
  return (
    <div>
      <ul>
        {images.map((post, index) => (
          <li key={index} onClick={(e) => e.setIsOpenModal(!isOpenModal)}>
            <img src={post.urls.small ?? post.slug} alt="Picture">
              {post.title}
            </img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
