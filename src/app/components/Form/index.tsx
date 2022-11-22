/**
 * Form
 */

import { memo } from 'react';
import { FormProvider } from 'react-hook-form';

import { FormType } from 'app/components/Form/types/Form.types';

export const Form = ({
  formName,
  onSubmit,
  onError,
  children,
  form,
  ...props
}: FormType) => {
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        aria-label={formName}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default memo(Form);

export { default as Field } from './Field';
