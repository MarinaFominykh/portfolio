import "./Contacts.scss";
import { ContactsList } from "../../data/contacts";
import ContactCard from "../ContactCard/ContactCard";
import Form from "../Form/Form";
import AOS from "aos";
import axios from "axios";
import { InputsValueModel } from "../../models/InputsValueModel";
import { CHAT_ID, URL_API } from "../../utils/constans";
import { sendMessage } from "../../utils/functions";

const Contacts: React.FC = () => {
  AOS.init({ duration: 1000 });

  const hadleSubmit = (data: InputsValueModel) => {
    sendMessage(data, axios, URL_API, CHAT_ID);
   
  };
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__wrapper" data-aos="fade-zoom-in">
        <h2 className="contacts__title text-mrg">
          Contact&nbsp;
          <span className="contacts__title-span text-mrg">Me</span>
        </h2>
        <ul className="contacts__list list">
          {ContactsList.map((contact) => {
            return <ContactCard key={contact.id} contact={contact} />;
          })}
        </ul>
        <Form handleSubmit={hadleSubmit} />
      </div>
    </section>
  );
};

export default Contacts;
