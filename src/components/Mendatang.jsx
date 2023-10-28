import { Link } from 'react-router-dom';
import img from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import { useState } from 'react';
import { RefreshCw } from 'react-feather';
import Dropdown from '../Dropdown';

export default function Mendatang() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const data = [
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m', genre: 'adventure' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season', genre: 'horror' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season', genre: 'superhero' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season', genre: 'horror' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season', genre: 'adventure' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season', genre: 'action' },
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m', genre: 'adventure' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season', genre: 'horror' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season', genre: 'superhero' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season', genre: 'horror' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season', genre: 'adventure' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season', genre: 'action' },
    { id: 1, image: img, title: 'Baby Driver', date: '2017', time: '1h 53m', genre: 'adventure' },
    { id: 2, image: img2, title: 'Squid Game', date: '2017', time: '1 season', genre: 'horror' },
    { id: 3, image: img3, title: 'Titans', date: '2018', time: '4 season', genre: 'superhero' },
    { id: 4, image: img4, title: 'Wednesday', date: '2022', time: '1 season', genre: 'horror' },
    { id: 5, image: img5, title: 'The Witcher', date: '2019', time: '2 season', genre: 'adventure' },
    { id: 6, image: img6, title: '1899', date: '2022', time: '1 season', genre: 'action' },
  ];
  const filteredData = selectedGenre === 'all' ? data : data.filter((item) => item.genre === selectedGenre);
  return (
    <div className="typeFilm container">
      <div className="typeFilm-head">
        <h1>Mendatang</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2>Genre : </h2>
          <Dropdown genres={['all', 'adventure', 'horror', 'superhero', 'action']} onSelectGenre={setSelectedGenre} />
        </div>
      </div>
      <div className="film-wrapper " style={{ flexWrap: 'wrap', gap: '3rem 1.5rem' }}>
        {filteredData.map((data, i) => (
          <Link to={`/mendatang/detail/${data.id}`} className="card-film film" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </Link>
        ))}
      </div>
      <button>
        Lebih Banyak <RefreshCw />
      </button>
    </div>
  );
}
