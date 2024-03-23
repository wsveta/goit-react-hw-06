import { useSelector } from "react-redux";
import Contact from "./Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.value);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <ul className={css.contacts}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
