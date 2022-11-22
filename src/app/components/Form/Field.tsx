/**
 * Field
 */

import { TextField, Switch } from '@mui/material';

import { generateField, typeOfFields } from 'app/components/Form/GenerateField';

const Field = {
  Input: generateField(TextField),
  Toggle: generateField(Switch, typeOfFields.toggle),
};

export default Field;
