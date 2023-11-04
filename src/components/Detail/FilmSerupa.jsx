import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import img from '../..//img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';
import img4 from '../../img/4.png';
import img5 from '../../img/5.png';
import img6 from '../../img/6.png';

export default function FilmSerupa() {
  const similarMovie = [
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season' },
  ];

  const comp = () => (
    <>
      <div className="typeFilm-title">
        <h1>Film Serupa</h1>
        <Link to="/tayang">
          <button>
            Lebih Banyak <ChevronRight />
          </button>
        </Link>
      </div>
      <div className="film-wrapper scroll" style={{ textAlign: 'center' }}>
        {similarMovie.map((data, i) => (
          <div className="poster" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </div>
        ))}
      </div>
    </>
  );
  return <section className="typeFilm container similarFilm">{comp()}</section>;
}
