/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { RefreshCw } from 'react-feather';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import img from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';

export default function Tayang() {
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
    <div className="typeFilm container pt" style={{ gap: '3rem' }}>
      <div className="typeFilm-head">
        <h1>Sedang Tayang</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2>Genre : </h2>
          <Dropdown genres={['all', 'adventure', 'horror', 'superhero', 'action']} onSelectGenre={setSelectedGenre} />
        </div>
      </div>
      <div className="film-wrapper film" style={{ textAlign: 'center' }}>
        {filteredData.map((data, i) => (
          <Link to={`/tayang/detail/${data.id}`} className="poster" key={i}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              {data.date} | {data.time}
            </p>
          </Link>
        ))}
      </div>
      <div className="btn-mid" style={{ paddingBottom: '2rem' }}>
        <button>
          Lebih Banyak <RefreshCw />
        </button>
      </div>
    </div>
  );
}
