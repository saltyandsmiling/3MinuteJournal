import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField'
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

class Affirm extends React.Component {

  render () {

    return <div className='centered' onSubmit={this.props.handleSubmit}>
      <br/>
      <form >
        <TextField fullWidth={true} floatingLabelText={this.props.text[2]} floatingLabelStyle={this.props.inputStyle.floatingLabelStyle} floatingLabelFocusStyle={this.props.inputStyle.floatingLabelFocusStyle} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[6]} id="6" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[7]} id="7" onChange={this.props.onChange}/>

        <TextField fullWidth={true} inputStyle={this.props.inputStyle.inputStyle} value={this.props.value[8]} id="8" onChange={this.props.onChange}/>

        <FlatButton type="submit" label="Back" onClick={this.props.handlePrev} style={this.props.inputStyle.floatingLabelFocusStyle}/>

        <FlatButton type="submit" label="Submit" style={this.props.inputStyle.floatingLabelFocusStyle}/>
      </form>
    </div>
  }
}

export default Affirm