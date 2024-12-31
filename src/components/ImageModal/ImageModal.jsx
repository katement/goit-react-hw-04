import { useEffect } from "react";
import s from "../ImageModal/ImageModal.module.css";

const ImageModal = ({ selectedImage, onClose }) => {
  const { urls, slug } = selectedImage;
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div className={s.wrapper} onClick={onClose}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <img src={urls?.regular} alt={slug || "Picture"} />
        <button className={s.closeBtn} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
