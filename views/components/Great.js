import React from 'react';
import TextField from 'material-ui/TextField';
import { white, lightWhite } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

class Great extends React.Component {
  componentWillUnmount() {
    this.props.endTransition();
  }

  render() {
    const { text, onChange, value, handleNext, handlePrev } = this.props;
    const colorWhite = { color: white };
    const colorLightWhite = { color: lightWhite };
    return (
      <div className="centered">
        <br />
        <form >
          <TextField
            fullWidth
            floatingLabelText={text[1]}
            floatingLabelStyle={colorWhite}
            floatingLabelFocusStyle={colorLightWhite}
            inputStyle={colorWhite} value={value[3]}
            id="3"
            onChange={onChange}
          />
          <TextField
            fullWidth
            inputStyle={colorWhite}
            value={value[4]}
            id="4"
            onChange={onChange}
          />
          <TextField
            fullWidthinputStyle={colorWhite}
            value={value[5]} id="5"
            onChange={onChange}
          />
          <FlatButton
            type="submit"
            label="Back"
            onClick={handlePrev}
            style={colorLightWhite}
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

Great.propTypes = {
  endTransition: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  text: PropTypes.checkPropTypes(PropTypes.array),
  value: PropTypes.checkPropTypes(PropTypes.array),
};

export default Great;
