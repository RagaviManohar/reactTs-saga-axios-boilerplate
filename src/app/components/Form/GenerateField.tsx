/**
 * generateField
 */

import { forwardRef } from 'react';

// Lodash
import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { Controller, useFormContext } from 'react-hook-form';

import FormControlField from 'app/components/Form/FormControlField';

import { FieldComponentType } from 'app/components/Form/types/Field.types';

export const typeOfFields = {
  default: 'default',
  control: 'control',
  toggle: 'toggle',
  checkbox: 'checkbox',
};

export const generateField = (
  FormComponent,
  typeOfFormControl = typeOfFields.default,
) => {
  // To create an unique id with the parameter as prefix
  const fieldId = uniqueId('form-field-');

  const ModifiedFormComponent = forwardRef(
    (
      {
        rules,
        name,
        formControlProps,
        labelProps,
        renderInput,
        ...props
      }: FieldComponentType,
      ref: any,
    ) => {
      const {
        control,
        register,
        formState: { errors },
      } = useFormContext();

      const helperText = get(errors, `${name}.message`, '');

      const getComponent = () => {
        let errorProps: object = {
          error: !isEmpty(helperText),
        };

        // Toggle doesn't send error Property.
        if (
          [typeOfFields.toggle, typeOfFields.checkbox].includes(
            typeOfFormControl,
          )
        ) {
          errorProps = {};
        }

        if (
          [typeOfFields.control, typeOfFields.checkbox].includes(
            typeOfFormControl,
          )
        ) {
          return (
            <>
              <Controller
                render={({ field }) => (
                  <FormComponent
                    id={fieldId}
                    control={control}
                    inputProps={{ 'aria-label': name }}
                    {...field}
                    {...props}
                    ref={ref}
                    {...errorProps}
                  />
                )}
                control={control}
                name={name}
                rules={rules}
                {...props}
              />

              <FormControlField.Error message={helperText.toString()} />
            </>
          );
        }

        return (
          <>
            <FormComponent
              id={fieldId}
              inputProps={{ 'aria-label': name, autoComplete: 'off' }}
              {...register(name, { ...rules })}
              {...props}
              {...errorProps}
            />

            <FormControlField.Error message={helperText.toString()} />
          </>
        );
      };

      return (
        <>
          <FormControlField.FormControl {...formControlProps}>
            <FormControlField.Label name={fieldId} {...labelProps} />

            {getComponent()}
          </FormControlField.FormControl>
        </>
      );
    },
  );

  ModifiedFormComponent.displayName = 'FieldComponent';

  return ModifiedFormComponent;
};

export default generateField;
