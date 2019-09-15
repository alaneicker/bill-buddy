import React from 'react';
import './splash.scss';

export const Splash = (props) => {
  return (
    <div className="splash-page">
      <div className="splash-page__content">
        <img src="/assets/images/wallet.svg" alt="image of a wallet" />
        <h1>Bill Buddy</h1>
        <h2 className="margin-bottom-32">Bill and Expense Tracking Made Easy.</h2>
        <ul className="h-list h-list--hr-8">
          <li><button type="button" className="btn btn--primary">Create Account</button></li>
          <li><button type="button" className="btn btn--secondary">Log In</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Splash;