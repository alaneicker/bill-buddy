import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

const Logo = (props) => {
  const { img, text } = props;

  return (
    <div className="logo">
      <div className="logo__img">
        {img}
      </div>
      <div className="logo__text">
        {text}
      </div>
    </div>
  );
};

Logo.propType = {
  img: PropTypes.element,
  text: PropTypes.string,
};

export default Logo;