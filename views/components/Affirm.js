import React from 'react';
import TextField from 'material-ui/TextField';
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

class Affirm extends React.Component {
  componentWillUnmount () {
    this.props.endTransition();
  }

  render() {
    const { text, onChange, value, handlePrev, handleSubmit } = this.props;
    const colorWhite = { color: white };
    const colorLightWhite = { color: lightWhite };

    return (
      <div className="centered" onSubmit={handleSubmit}>
        <br />
        <form >
          <TextField fullWidth floatingLabelText={text[2]} floatingLabelStyle={colorWhite} floatingLabelFocusStyle={colorLightWhite} inputStyle={colorWhite} value={value[6]} id="6" onChange={onChange} />
          <TextField fullWidth inputStyle={colorWhite} value={value[7]} id="7" onChange={onChange} />
          <TextField fullWidth inputStyle={colorWhite} value={value[8]} id="8" onChange={onChange} />
          <FlatButton type="submit" label="Back" onClick={handlePrev} style={colorLightWhite} />
          <FlatButton type="submit" label="Submit" style={colorLightWhite} />
        </form>
      </div>
    );
  }
}

Affirm.propTypes = {
  endTransition: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  text: PropTypes.checkPropTypes(PropTypes.array),
  value: PropTypes.checkPropTypes(PropTypes.array),
};

export default Affirm;
