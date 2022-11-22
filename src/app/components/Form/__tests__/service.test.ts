import { validateString } from 'app/components/Form/service';
import { mockValidateStringProps } from 'app/components/Form/__tests__/__fixtures__/props';

describe('Form.service', () => {
  describe('validateString', () => {
    it('should give error message', () => {
      expect(
        validateString({
          value: mockValidateStringProps.emptyValue,
          message: mockValidateStringProps.message,
        }),
      ).toEqual(mockValidateStringProps.message);
    });

    it('should value equal to undefined', () => {
      expect(
        validateString({
          value: mockValidateStringProps.message,
          message: mockValidateStringProps.message,
        }),
      ).toBeUndefined();
    });
  });
});
