
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
