import React from 'react';
import Logo from '../logo';
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <Logo img={<img src="/assets/images/wallet.svg" alt="image of a wallet" width="36" />} text="Bill Buddy" />
    </header>
  );
};

export default Header;