import React from 'react';
import PropTypes from 'prop-types';

class Lazy extends React.Component {
  componentWillMount = () => {
    import(this.props.path)
      .then((Component) => {
        this.Component = Component;
        this.Loading = this.props.Loading;
        if (this.props.complete) this.props.complete();
        if (this.props.force) this.forceUpdate();
      });
  }

  newProps = () => {
    let newProps = {...this.props};
    delete newProps.path;
    delete newProps.loading;
    delete newProps.force;
    delete newProps.complete;

    return newProps;
  }

  render() {
    return (
      { () => this.component ?
        <this.Component {...this.newProps()}>{this.props.children}</this.Component>
        : (<this.loading />) 
  }
}

Lazy.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.element,
  force: PropTypes.bool,
  complete: PropTypes.func,
  Loading: PropTypes.node,
};

Lazy.defaultProps = {
  force: false,
  complete: null,
  Loading: null,
  children: null,
};

export default Lazy;
