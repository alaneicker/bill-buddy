import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';

export const Splash = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="pre-login-layout">
        <div className="pre-login-layout__content">
          <h1>Organize Your Finances with Bill Buddy</h1>
          <h2 className="margin-bottom-32">Bill and Expense Tracking Made Easy.</h2>
          <ul className="h-list h-list--hr-8">
            <li><Link to="/create-account" className="btn btn--primary"><span>Create Account</span></Link></li>
            <li><Link to="/login" className="btn btn--secondary"><span>Log In</span></Link></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Splash;