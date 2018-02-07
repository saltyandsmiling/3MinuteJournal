import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField'
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

class Great extends React.Component {

  render () {

    return (<div className='centered'>
      <br/>
      <form >
        <TextField fullWidth={true} floatingLabelText={this.props.text[1]} floatingLabelStyle={this.props.inputStyle.floatingLabelStyle} floatingLabelFocusStyle={this.props.inputStyle.floatingLabelFocusStyle} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[3]} id="3" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[4]} id="4" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[5]} id="5" onChange={this.props.onChange}/>

        <FlatButton type="submit" label="Back" onClick={this.props.handlePrev} style={this.props.inputStyle.floatingLabelFocusStyle}/>

        <FlatButton type="submit" label="Next" onClick={this.props.handleNext} style={this.props.inputStyle.floatingLabelFocusStyle}/>
      </form>
    </div>)
  }
}

export default Great