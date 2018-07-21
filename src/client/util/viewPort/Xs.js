import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext } from './SizeContext';

const Xs = ({ children, inverse, only }) => (
  <SizeContext.Consumer>
    {(size) => {
      if (only) {
        return size === 0 ? children : null;
      }
      return (inverse ? true : size < 1) ? children : null;
    }}
  </SizeContext.Consumer>
);


Xs.propTypes = {
  children: PropTypes.element.isRequired,
  inverse: PropTypes.bool,
  only: PropTypes.bool,
};

Xs.defaultProps = {
  inverse: false,
  only: false,
};


export default { Xs };
