/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} style={{ width: '100%' }}>
    <InputLabel htmlFor="status">{label}</InputLabel>
    <Select {...input} {...custom} value={input.value}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  children: PropTypes.array,
};

export default renderSelectField;
