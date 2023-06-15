import "./ContactCard.scss";
import { ContactCardModel } from "../../models/ContactCardModel";

interface ContactCardProps {
  contact: ContactCardModel;
}
const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <li className="contact">
      <svg
        className="contact__icon"
        stroke={contact.svg.stroke}
        fill={contact.svg.fill}
        strokeWidth="0"
        viewBox={contact.svg.viewBox}
        color={contact.svg.color}
        height={contact.svg.height}
        width={contact.svg.width}
        xmlns={contact.svg.xmlns}
      >
        <path d={contact.path.d}></path>
      </svg>
      <p className="contact__title text-mrg">{contact.title}</p>
      <a
        className="contact__link link"
        href={contact.url}
        target="_blank"
        rel="noreferrer"
      >
        <p className="contact__link-txt">{contact.link}</p>
      </a>
    </li>
  );
};

export default ContactCard;
