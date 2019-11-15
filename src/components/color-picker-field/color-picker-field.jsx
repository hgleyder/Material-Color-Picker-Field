import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import Popover from '@material-ui/core/Popover';

const ColorPickerField = ({
  fullWidth, primaryColor, value, label, placeholder, onChange,
}) => {
  const [color, setColor] = useState(value);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnChange = (newValue) => {
    onChange(newValue);
    setColor(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container
      value={color}
      primaryColor={primaryColor}
      fullWidth={fullWidth}
    >
      {label && <div className="label">{label}</div>}
      {/* eslint-disable-next-line */}
      <div className="content" aria-describedby={id} onClick={handleClick}>
        {color || <span style={{ color: '#707070' }}>{placeholder}</span>}
        {color && <div className="color-preview" />}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SketchPicker
          color={color}
          disableAlpha
          onChangeComplete={newColor => handleOnChange(newColor.hex)}
        />
      </Popover>
    </Container>);
};

const Container = styled.div`
    display: inline-block;
    min-width: 10rem;
    width: ${props => (props.fullWidth ? '100%' : 'auto')}; 
    & > .label {
      color: #707070;
      font-size: 0.75rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
    & > .content {
      margin-top: 0.5rem;
      width: 100%;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #707070;
      color: black;
      font-size: 1rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
    & .color-preview {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      position relative;
      float: right;
      right: 0.5rem;
      background-color: ${props => props.value};
    }
`;


ColorPickerField.propTypes = {
  /** Field overlay color */
  primaryColor: PropTypes.string,
  /** Set the component width as 100% */
  fullWidth: PropTypes.bool,
  /** Field Current Value */
  value: PropTypes.string,
  /** Field Label */
  label: PropTypes.string,
  /** Placeholder text used when no value is selected */
  placeholder: PropTypes.string,
  /** onChange method called whenever the value change */
  onChange: PropTypes.func,
};

ColorPickerField.defaultProps = {
  primaryColor: '#0097a7',
  fullWidth: false,
  value: '',
  label: '',
  placeholder: '',
  onChange: () => {},
};

export default ColorPickerField;
