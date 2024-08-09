import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={s.contactItem}>
            <Contact contactInfo={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
