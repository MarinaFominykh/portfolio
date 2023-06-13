import "./Contacts.scss";
import { ContactsList } from "../../data/contacts";
import  ContactCard from "../ContactCard/ContactCard";
import AOS from "aos";
const Contacts: React.FC = () => {
  AOS.init({duration: 1000});
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__wrapper" data-aos="fade-zoom-in">
        <h2 className="contacts__title text-mrg">
          Contact&nbsp;
          <span className="contacts__title-span text-mrg">Me</span>
        </h2>
        <ul className="contacts__list list">
          {ContactsList.map((contact) => {
            return (
             <ContactCard key={contact.id} contact={contact} />
            )
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
