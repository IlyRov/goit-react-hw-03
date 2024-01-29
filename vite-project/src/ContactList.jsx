import Contact from './Contact'; 

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
};

export default ContactList;
