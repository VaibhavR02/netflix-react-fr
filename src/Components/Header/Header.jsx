import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.scss';
import { ImSearch } from 'react-icons/im';

const Header = ({ isScrolled }) => {
  const navigate = useNavigate();

  return (
    <nav className={`${isScrolled ? 'scrolled' : ''} header`}>
      <img onClick={() => navigate('/')} src={logo} alt="logo" />
      <div>
        <Link to={'/'}>TV Shows</Link>
        <Link to={'/'}>Movies</Link>
        <Link to={'/'}>Recently Added</Link>
        <Link to={'/'}>My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
