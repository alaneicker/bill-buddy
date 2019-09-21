import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <Logo img={<img src="/assets/images/wallet.svg" alt="image of a wallet" width="36" />} text="Bill Buddy" />
      <ul className="header__nav">
        <li><Link to="/login">My Account</Link></li>
        <li><Link to="/login">About</Link></li>
        <li><Link to="/login">FAQs</Link></li>
      </ul>
    </header>
  );
};

export default Header;