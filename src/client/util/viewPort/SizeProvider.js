import React from 'react';
import PropTypes from 'prop-types';
import { SizeContext, UpdateSize } from './SizeContext';

class SizeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
    };
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', this.updateSize);
  }

  updateSize = UpdateSize(this);

  render() {
    console.log(this.state.size);
    return (
      <SizeContext.Provider value={this.state.size}>
        {this.props.children}
      </SizeContext.Provider>
    );
  }
}

SizeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default { SizeProvider };
