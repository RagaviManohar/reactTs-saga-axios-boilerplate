import { ControllerProps } from 'react-hook-form';

export interface FieldComponentType {
  name: string;
  register?: Function | any;
  placeholder?: string | any;
  value?: string | number | any;
  error?: string;
  defaultValue?: string | Number | [];
  disabledOptions?: string[];
  defaultChecked?: boolean;
  errors?: Object | {};
  disabled?: Function | any;
  control?: Object | any;
  input?: JSX.Element | any;
  options?: string[] | any;
  rules?: ControllerProps['rules'];
  children?: JSX.Element[] | any;
  multiple?: any;
  onChange?: Function | any;
  checked?: any;
  type?: React.InputHTMLAttributes<unknown>['type'];
  renderInput?: Function | any;
  style?: object;
  helperText?: any;
  className?: string;

  // props for FormControlField
  formControlProps?: object | {};
  labelProps?: object | any;

  // errorProps?: object | {};
  renderValue?: Function | any;
  required?: boolean;

  // props related to material components
  variant?: string;
  multiline?: boolean | false;
  rows?: number | any;
}
