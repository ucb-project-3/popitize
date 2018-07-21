import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext } from './SizeContext';

const Lg = ({ children, inverse, only }) => (
  <SizeContext.Consumer>
    {(size) => {
      if (only) {
        return size === 3 ? children : null;
      }
      return (inverse ? size >= 3 : size < 4) ? children : null;
    }}
  </SizeContext.Consumer>
);


Lg.propTypes = {
  children: PropTypes.element.isRequired,
  inverse: PropTypes.bool,
  only: PropTypes.bool,
};

Lg.defaultProps = {
  inverse: false,
  only: false,
};


export default { Lg };
