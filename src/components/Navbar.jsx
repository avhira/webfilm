/* eslint-disable react/prop-types */
import { Menu, Search } from 'react-feather';
import logo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const openNav = () => {
    setIsActive(!isActive);
  };
  return (
    <nav id="navbar">
      <div className="navbar">
        <div className="kiri">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className={`${isActive ? 'active' : ''}`}>
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
          </ul>
        </div>

        <div className="kanan">
          <Link to="/pencarian">
            <button>
              <Search />
            </button>
          </Link>
          <input type="search" placeholder="Cari Film ..." />
        </div>

        <button className="menu-nav" onClick={openNav}>
          <Menu className="menu-img" />
        </button>
      </div>
    </nav>
  );
}
