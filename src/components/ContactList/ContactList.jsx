import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={s.contactList}>{contacts.map((contact) => {
            return (
                <li key={contact.id} className={s.contactItem}>
                    <Contact contactInfo={contact} onDelete={onDelete} />
                </li>
            );
        })}
        </ul>
    );
}

export default ContactList
