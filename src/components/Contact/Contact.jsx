import s from './Contact.module.css'
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


const Contact = ({ contactInfo: {id, name, number}, onDelete}) => {
    return (
    <div className={s.contact}>
        <div className={s.contactInfo}>
          <div className={s.icon}>
            <FaRegUser size={20} />
            <span className={s.contactValue}>{name}</span>
          </div>
          <div className={s.icon}>
           <FiPhone size={20} />
            <span className={s.contactValue}>{number}</span>
            </div>
        </div>
          <button onClick={()=>onDelete(id)} className={s.onDelete}>Delete</button>
    </div>
  )
}

export default Contact
