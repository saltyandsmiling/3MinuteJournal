import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField'
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

class Grateful extends React.Component {
  componentWillUnmount () {
    this.props.handleTransitionEnd();
  }

  render () {

    return <div className='centered'>
      <br/>
      <form >
        <TextField fullWidth={true} floatingLabelText={this.props.text[0]} floatingLabelStyle={this.props.inputStyle.floatingLabelStyle} floatingLabelFocusStyle={this.props.inputStyle.floatingLabelFocusStyle} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[0]} id="0" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[1]} id="1" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[2]} id="2" onChange={this.props.onChange}/>

        <FlatButton type="submit" label="Next" onClick={this.props.handleNext} style={this.props.inputStyle.floatingLabelFocusStyle}/>


      </form>
    </div>
  }
} 

export default Grateful

