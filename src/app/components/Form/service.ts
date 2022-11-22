import { Validate } from 'react-hook-form';

import { PATTERNS } from 'utils/constants';

type validateStringType = {
  value: string;
  message: string;
};

export const validateString = ({ value, message }: validateStringType) => {
  if (value.trim().length === 0) {
    return message;
  }
};

export const emailValidation =
  (message: string): Validate<string> =>
  (value: string) => {
    const isValid = PATTERNS.email.test(value);
    if (!isValid) {
      return message;
    }
  };

interface lengthValidationType {
  emptyStringErrorMessage: string;
  minErrorMessage: string;
  maxErrorMessage: string;
  minLimit?: Number;
  maxLimit?: Number;
}

// Empty string validation
export const lengthValidation =
  ({
    emptyStringErrorMessage,
    minErrorMessage,
    maxErrorMessage,
    minLimit = 1,
    maxLimit = 100,
  }: lengthValidationType): Validate<string> =>
  (value: string) => {
    if (value?.length > 0) {
      validateString({ value, message: emptyStringErrorMessage });

      if (value.trim().length < minLimit) {
        return minErrorMessage;
      }
      if (value?.trim().length > maxLimit) {
        return maxErrorMessage;
      }
    }
  };
