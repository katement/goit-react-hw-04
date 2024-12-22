
import { useEffect } from "react";


const ImageModal = ({selectedImage, onClose}) => {
    const {urls, slug}=results;
    useEffect(()=>{
        const handleKeyDown=(e)=>{
            if(e.key==="Escape"){
                onClose();
            }
        }
    window.addEventListener("keydown",handleKeyDown);
return ()=>{
    window.removeEventListener("keydown", handleKeyDown)
}
}, [onClose]);
  return <div className="modal"
    onClick={onClose}>
        <div className="modal-content"
    onClick={(e)=>e.stopPropagation()}>

        <img src={urls?.regular} alt={slug||"Picture"} />
        <button className="close-btn"
        onClick={onClose}>
            X
        </button>
    

        </div>
   

  </div>;
};

export default ImageModal;
