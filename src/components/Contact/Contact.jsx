import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.contactItem} key={contact.id}>
      <span className={css.contactData}>
        <p className={css.contactText}>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p className={css.contactText}>
          <FaPhone className={css.icon} />
          {contact.phone}
        </p>
      </span>
      <button
        type="button"
        onClick={handleDelete}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
