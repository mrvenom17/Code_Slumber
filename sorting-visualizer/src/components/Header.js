import React from 'react';
import logo from './logo/logo.jpg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="LazySort Logo" style={{ height: '55px' }} />
    </header>
  );
};

export default Header;