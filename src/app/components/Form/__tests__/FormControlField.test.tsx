import { render, cleanup } from 'jest.setup';

import { FormControlField } from 'app/components/Form/FormControlField';

afterEach(cleanup);

const renderComponent = () => render(<FormControlField children={''} />);

describe('<FormControlField />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  describe('<FormControlField.FormControl/>', () => {
    const renderComponent = () =>
      render(<FormControlField.FormControl children={''} />);

    it('expect to not log errors in console', () => {
      const spy = jest.spyOn(global.console, 'error');
      renderComponent();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('<FormControlField.Label/>', () => {
    const renderComponent = () =>
      render(<FormControlField.Label name={'test'} displayName={'test'} />);

    it('expect to not log errors in console', () => {
      const spy = jest.spyOn(global.console, 'error');
      renderComponent();
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
