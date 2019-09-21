import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

const Logo = (props) => {
  const { size, imgUrl, text } = props;

  return (
    <div className="logo">
      <div className="logo__img">
        <img src={imgUrl} width={size} alt="logo image" />
      </div>
      <div className="logo__text">
        {text}
      </div>
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  imgUrl: PropTypes.string,
  text: PropTypes.string,
};

Logo.defaultProps = {
  size: '16',
};

export default Logo;