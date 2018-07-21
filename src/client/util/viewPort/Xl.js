import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext } from './SizeContext';

const Xl = ({ children, inverse, only }) => (
  <SizeContext.Consumer>
    {(size) => {
      if (only) {
        return size === 4 ? children : null;
      }
      return (inverse ? size === 4 : true) ? children : null;
    }}
  </SizeContext.Consumer>
);


Xl.propTypes = {
  children: PropTypes.element.isRequired,
  inverse: PropTypes.bool,
  only: PropTypes.bool,
};

Xl.defaultProps = {
  inverse: false,
  only: false,
};


export default { Xl };
