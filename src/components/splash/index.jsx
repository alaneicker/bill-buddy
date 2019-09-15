import React from 'react';
import { Link } from 'react-router-dom';

export const Splash = (props) => {
  return (
    <div className="pre-login-layout">
      <div className="pre-login-layout__content">
        <img src="/assets/images/wallet.svg" alt="image of a wallet" />
        <h1>Bill Buddy</h1>
        <h2 className="margin-bottom-32">Bill and Expense Tracking Made Easy.</h2>
        <ul className="h-list h-list--hr-8">
          <li><Link to="/create-account" className="btn btn--primary"><span>Create Account</span></Link></li>
          <li><Link to="/login" className="btn btn--secondary"><span>Log In</span></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Splash;