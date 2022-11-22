import { UseFormReturn } from 'react-hook-form';

export interface FormType {
  formName: string;
  onSubmit?: Function | any;
  onError?: Function | any;
  children: JSX.Element | JSX.Element[];
  form: UseFormReturn<any>;
}
