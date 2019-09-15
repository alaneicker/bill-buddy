import React from 'react';
import { connect } from 'react-redux';
import { updateSplash } from './splash.actions';
import './splash.scss';

export const Splash = (props) => {
  const { splashTitle, splashSubtitle } = props;

  return (
    <div className="splash-page">
      <div className="splash-page__content">
        <img src="/assets/images/wallet.svg" alt="image of a wallet" />
        <h1>{splashTitle}</h1>
        <h2 className="margin-bottom-32">{splashSubtitle}</h2>
        <button type="button" className="btn btn--secondary">Get Started</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ splashReducer }) => {
  const { splashTitle, splashSubtitle } = splashReducer;

  return {
    splashTitle,
    splashSubtitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSplash(payload) {
      dispatch(updateSplash(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);