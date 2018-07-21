import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext } from './SizeContext';

const Md = ({ children, inverse, only }) => (
  <SizeContext.Consumer>
    {(size) => {
      if (only) {
        return size === 2 ? children : null;
      }
      return (inverse ? size >= 2 : size < 3) ? children : null;
    }}
  </SizeContext.Consumer>
);


Md.propTypes = {
  children: PropTypes.element.isRequired,
  inverse: PropTypes.bool,
  only: PropTypes.bool,
};

Md.defaultProps = {
  inverse: false,
  only: false,
};


export default { Md };
