import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <Logo size="36" imgUrl="/assets/images/wallet.svg" text="Bill Buddy" />
      <ul className="header__nav">
        <li><Link to="/login">My Account</Link></li>
        <li><Link to="/login">About</Link></li>
        <li><Link to="/login">FAQs</Link></li>
      </ul>
    </header>
  );
};

export default Header;