import { Search } from 'react-feather';
import logo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className={isChecked ? 'slide' : ''}>
        <li>
          <Link to="tayang" style={{ color: location.pathname === '/tayang' ? '#ff0000' : '#fff' }}>
            Sedang Tayang
          </Link>
        </li>
        <li>
          <Link to="terpopuler" style={{ color: location.pathname === '/terpopuler' ? '#ff0000' : '#fff' }}>
            Terpopuler
          </Link>
        </li>
        <li>
          <Link to="mendatang" style={{ color: location.pathname === '/mendatang' ? '#ff0000' : '#fff' }}>
            Mendatang
          </Link>
        </li>
        <li>
          <Link to="/pencarian">
            <div className="nav-search">
              <Search />
              <input type="search" placeholder="Cari Film ..." readOnly />
            </div>
          </Link>
        </li>
      </ul>
      <div className="menu-toggle">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
