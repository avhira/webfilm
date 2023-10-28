/* eslint-disable react/prop-types */
const Dropdown = ({ genres, onSelectGenre }) => {
  const handleGenreChange = (event) => {
    onSelectGenre(event.target.value);
  };

  return (
    <select className="dropdown" onChange={handleGenreChange}>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
