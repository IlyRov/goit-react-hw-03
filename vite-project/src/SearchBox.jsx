
const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input type="text" placeholder="Search contacts..." onChange={handleChange} />
  );
};

export default SearchBox;
