const ImageCard = (results, onClick) => {
  const {urls, slug} =results
  return (
    <div onClick={onClick}>
      Modal
      <img src={post.urls.small ?? post.slug} alt="Picture" />
    </div>
  );
};

export default ImageCard;
