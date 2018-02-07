import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Welcome extends React.Component {
  componentWillUnmount () {
    this.props.handleTransitionEnd();
  }

  render () {

    return (
          <div id='welcome' key={1}>Hello Eric, welcome to today...</div>
        )

  }
}

export default Welcome

