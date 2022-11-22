/**
 *
 */

import isEmpty from 'lodash/isEmpty';
import { FormControl, FormHelperText } from '@mui/material';

import {
  LabelProps,
  ErrorProps,
} from 'app/components/Form/types/FormControlField.types';

export const FormControlField = ({ children }) => {
  return children;
};

FormControlField.FormControl = ({ children, ...props }) => {
  return <FormControl {...props}>{children}</FormControl>;
};

FormControlField.Label = ({
  name,
  displayName,
  required,
  className,
  ...props
}: LabelProps) => {
  return (
    <label className={className} htmlFor={name} {...props}>
      {displayName} {required ? '*' : ''}
    </label>
  );
};

FormControlField.Error = ({ message, ...props }: ErrorProps) => {
  if (!isEmpty(message))
    return (
      <FormHelperText error {...props}>
        {message}
      </FormHelperText>
    );

  return <></>;
};

export default FormControlField;
