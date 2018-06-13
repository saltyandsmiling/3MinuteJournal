import React from 'react';
import TextField from 'material-ui/TextField';
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

class Grateful extends React.Component {
  componentWillUnmount () {
    this.props.endTransition();
  }

  render() {
    const { text, onChange, value, handleNext } = this.props;
    const colorWhite = { color: white };
    const colorLightWhite = { color: lightWhite };
    return (
      <div className="centered">
        <br />
        <form >
          <TextField
            fullWidth
            floatingLabelText={text[0]}
            floatingLabelStyle={colorWhite}
            floatingLabelFocusStyle={colorLightWhite}
            inputStyle={colorWhite} value={value[0]}
            id="0"
            onChange={onChange}
          />
          <TextField
            fullWidth
            inputStyle={colorWhite}
            value={value[1]} id="1"
            onChange={onChange}
          />
          <TextField
            fullWidth
            inputStyle={colorWhite}
            value={value[2]}
            id="2"
            onChange={onChange}
          />
          <FlatButton
            type="submit"
            label="Next"
            onClick={handleNext}
            style={colorLightWhite}
          />
        </form>
      </div>
    );
  }
}

Grateful.propTypes = {
  endTransition: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  text: PropTypes.checkPropTypes(PropTypes.array),
  value: PropTypes.checkPropTypes(PropTypes.array),
};

export default Grateful;
