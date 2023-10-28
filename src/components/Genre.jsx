export default function Genre() {
  const genres = [
    { link: '#', type: 'Action' },
    { link: '#', type: 'Adventure' },
    { link: '#', type: 'Animation' },
    { link: '#', type: 'Comedy' },
    { link: '#', type: 'Crime' },
    { link: '#', type: 'Documentary' },
    { link: '#', type: 'Drama' },
    { link: '#', type: 'Family' },
    { link: '#', type: 'Fantasy' },
  ];
  const genresComp = () => (
    <ul>
      {genres.map((data, i) => (
        <li key={i}>
          <a href={data.link}>{data.type}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="genre" className="genre container">
      <h1>Genre Tersedia</h1>
      <div className="scroll-genre">
        {genresComp()}
        {genresComp()}
        {genresComp()}
        {genresComp()}
      </div>
    </section>
  );
}
