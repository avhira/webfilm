import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import img from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';

export default function TypeFilm() {
  const nowPlaying = [
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season' },
  ];
  const Trending = [
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season' },
  ];
  const comingSoon = [
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season' },
  ];

  const comp1 = () => (
    <div className="wrapper-typefilm">
      <div className="typeFilm-title">
        <h1>Sedang Tayang</h1>
        <Link to="/tayang">
          <button>
            Lebih Banyak <ChevronRight />
          </button>
        </Link>
      </div>
      <div className="film-wrapper scroll" style={{ textAlign: 'center' }}>
        {nowPlaying.map((data, i) => (
          <Link to={`/tayang/detail/${data.id}`} className="poster" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
  const comp2 = () => (
    <div className="wrapper-typefilm">
      <div className="typeFilm-title">
        <h1>Terpopuler</h1>
        <Link to="/terpopuler">
          <button>
            Lebih Banyak <ChevronRight />
          </button>
        </Link>
      </div>
      <div className="film-wrapper scroll" style={{ textAlign: 'center' }}>
        {Trending.map((data, i) => (
          <Link to={`/terpopuler/detail/${data.id}`} className="poster" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
  const comp3 = () => (
    <div className="wrapper-typefilm">
      <div className="typeFilm-title">
        <h1>Mendatang</h1>
        <Link to="/mendatang">
          <button>
            Lebih Banyak <ChevronRight />
          </button>
        </Link>
      </div>
      <div className="film-wrapper scroll" style={{ textAlign: 'center' }}>
        {comingSoon.map((data, i) => (
          <Link to={`/mendatang/detail/${data.id}`} className="poster" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
  return (
    <section id="typeFilm" className="typeFilm container" style={{ paddingTop: '5rem' }}>
      {comp1()}
      {comp2()}
      {comp3()}
    </section>
  );
}
