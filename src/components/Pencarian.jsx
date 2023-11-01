import img from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import logo from '../img/logo.png';
import { Search } from 'react-feather';
import { useState } from 'react';

import { Link } from 'react-router-dom';
export default function Pencarian() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Melakukan pencarian dengan kata kunci:', searchTerm);
    }
  };

  return (
    <>
      <div className="typeFilm container">
        <div className="nav-search" style={{ justifyContent: 'center', padding: '2rem 0 3rem' }}>
          <Search />
          <input type="search" style={{ width: '50%' }} placeholder="Cari Film ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
        </div>
        <div className="film-wrapper" style={{ flexWrap: 'wrap', gap: '3rem 1.5rem' }}>
          {filteredData.length === 0 ? (
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <h1>Film Tidak Ada</h1>
              <img src={logo} alt="not found" style={{ width: '20rem', paddingTop: '2rem' }} />
            </div>
          ) : (
            filteredData.map((data, i) => (
              <Link to={`/tayang/detail/${data.id}`} className="card-film film" key={i}>
                <img src={data.image} alt={data.title} />
                <h3>{data.title}</h3>
                <p>
                  {data.date} | {data.time}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
