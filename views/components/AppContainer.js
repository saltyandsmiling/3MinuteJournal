import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grateful from './Grateful';
import Great from './Great';
import Affirm from './Affirm';
import Welcome from './Welcome';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ['', '', '', '', '', '', '', '', ''],
      text: ['Today I am grateful for...', 'What would make today great...', 'I am...'],
      componentIdx: 0,
      transitionEnd: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.endTransition = this.endTransition.bind(this)
  }

  // handles welcome screen
  componentDidMount() {
    setTimeout(() => this.setState({
      componentIdx: 1,
      transitionEnd: false,
    }), 2000);
  }

  // parent component
  render() {
    return (
    // material-ui wrapper and below that, animation wrapper
      <MuiThemeProvider>
        <ReactCSSTransitionGroup
          transitionName="welcome"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderWelcome()}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="entry"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.renderGrateful()}
          {this.renderGreat()}
          {this.renderAffirm()}
        </ReactCSSTransitionGroup>

      </MuiThemeProvider>
    );
  }

  // components to be rendered based on index, separated out to handle animations
  renderWelcome() {
    if (this.state.componentIdx === 0) {
      return (
        <Welcome key={0} endTransition={this.endTransition} />
      );
    }
  }

  renderGrateful() {
    if (this.state.componentIdx === 1 && this.state.transitionEnd) {
      return (
        <Grateful
          key={1}
          endTransition={this.endTransition}
          handleNext={this.handleNext}
          value={this.state.value}
          text={this.state.text}
          onChange={this.handleChange}
        />
      );
    }
  }

  renderGreat() {
    if (this.state.componentIdx === 2 && this.state.transitionEnd) {
      return (
        <Great
          key={2}
          endTransition={this.endTransition}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
          inputStyle={this.state.inputStyle}
          value={this.state.value}
          text={this.state.text}
          onChange={this.handleChange}
        />
      );
    }
  }

  renderAffirm() {
    if (this.state.componentIdx === 3 && this.state.transitionEnd) {
      return (
        <Affirm
          key={3}
          endTransition={this.endTransition}
          handlePrev={this.handlePrev}
          handleSubmit={this.handleSubmit}
          inputStyle={this.state.inputStyle}
          value={this.state.value}
          text={this.state.text}
          onChange={this.handleChange}
        />
      );
    }
  }

  // sends to database to save or update
  handleSubmit(e) {
    e.preventDefault();
    // this will at some point send journal updates back to be written to the db
  }

  // updates form values in state
  handleChange(e) {
    const newState = this.state.value.slice();
    newState[e.target.id] = e.target.value;
    this.setState({
      value: newState,
    });
  }

  // moves to next component
  handleNext(e) {
    e.preventDefault();
    let newState = this.state.componentIdx;
    newState += 1;
    this.setState({
      componentIdx: newState,
      transitionEnd: false
    });
  }

  // moves to previous component
  handlePrev(e) {
    e.preventDefault();
    let newState = this.state.componentIdx;
    newState -= 1;
    this.setState({
      componentIdx: newState,
      transitionEnd: false,
    });
  }

  // resets transition flag
  endTransition() {
    this.setState({ transitionEnd: true });
  }
}
export default App;
