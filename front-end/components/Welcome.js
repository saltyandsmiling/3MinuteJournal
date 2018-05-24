import React from 'react';
import PropTypes from 'prop-types';


class Welcome extends React.Component {
  componentWillUnmount() {
    this.props.endTransition();
  }

  render() {
    return <div id="welcome" key={1}>Hello Eric, welcome to today...</div>;
  }
}

Welcome.propTypes = {
  endTransition: PropTypes.func.isRequired,
};

export default Welcome;
