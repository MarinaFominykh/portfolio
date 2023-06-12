import "./Popup.scss";
import { MdClose } from "react-icons/md";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    image: string;
}
const Popup:React.FC<PopupProps> = ({image, isOpen, onClose}) => {

    const closePopupOnOverlayClick = (event: React.SyntheticEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <aside onClick={closePopupOnOverlayClick} className={`popup ${isOpen && "popup_opened"}`}>
            <div className="popup__img-wrapper">
            <button className="popup__close" type="button" onClick={onClose}>
            <MdClose size="32px" color="#ffffff" />
            </button>
            <img className="popup__img" alt="Диплом веб-разработчика" src={image}/>
            </div>
           
        </aside>
    )
}

export default Popup;
