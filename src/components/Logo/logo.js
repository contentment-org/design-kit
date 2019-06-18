import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ height }) => (
  <img
    src="https://s3.us-east-2.amazonaws.com/tcf-assets/logo-tcf-color.svg"
    alt="logo"
    style={{ height }}
  />
);

Logo.defaultProps = {
  height: 40,
};

Logo.propTypes = {
  height: PropTypes.number,
};

export default Logo;
