import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext } from './SizeContext';

const Sm = ({ children, inverse, only }) => (
  <SizeContext.Consumer>
    {(size) => {
      if (only) {
        return size === 1 ? children : null;
      }
      return (inverse ? size >= 1 : size < 2) ? children : null;
    }}
  </SizeContext.Consumer>
);


Sm.propTypes = {
  children: PropTypes.element.isRequired,
  inverse: PropTypes.bool,
  only: PropTypes.bool,
};

Sm.defaultProps = {
  inverse: false,
  only: false,
};


export default { Sm };

