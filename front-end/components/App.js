import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Grateful from './Grateful'
import Great from './Great'
import Affirm from './Affirm'
//soon to be react-router

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ['', '', '', '', '', '', '', '', ''],
      text: ['Today I am grateful for...', 'What would make today great...', 'I am...'],
      componentIdx: 0,
      isLoading: false,
      inputStyle: {
        inputStyle: {
          color: white,
        },
        hintStyle: {
          color: white,
        },
        floatingLabelStyle: {
          color: white,
        },
        floatingLabelFocusStyle: {
          color: lightWhite,
        }
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/loadFetch')
         .then(res => this.setState({ value: res.data }))
  }

  render() {

    const gratefulVar = <Grateful handleNext={this.handleNext} inputStyle={this.state.inputStyle} value={this.state.value} text={this.state.text} onChange={this.handleChange}/>;

    const greatVar = <Great handlePrev={this.handlePrev} handleNext={this.handleNext} inputStyle={this.state.inputStyle} value={this.state.value} text={this.state.text} onChange={this.handleChange}/>;

    const affirmVar = <Affirm handlePrev={this.handlePrev} handleSubmit={this.handleSubmit} inputStyle={this.state.inputStyle} value={this.state.value} text={this.state.text} onChange={this.handleChange}/>;

    const componentArr = [gratefulVar, greatVar, affirmVar];

    return (
        <MuiThemeProvider>

          {componentArr[this.state.componentIdx]}

        </MuiThemeProvider>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentState = this.state.value;
    axios.post('http://localhost:3000/submit', currentState).then(function (response) {
      console.log(response);
    });
  }

  handleChange(e) {
    const newState = this.state.value.slice();
    newState[e.target.id] = e.target.value;
    this.setState({ value: newState });
  }

  handleNext(e) {
    e.preventDefault();
    let newState = this.state.componentIdx;
    newState += 1;
    this.setState({ componentIdx: newState });
  }

  handlePrev(e) {
    e.preventDefault();
    let newState = this.state.componentIdx;
    newState -= 1;
    this.setState({ componentIdx: newState });

  }

}
export default App;
