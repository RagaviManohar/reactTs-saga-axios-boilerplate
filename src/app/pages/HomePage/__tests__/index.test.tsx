import { render, cleanup, HelmetProvider } from 'jest.setup';

import { HomePage } from 'app/pages/HomePage';

afterEach(cleanup);

const renderComponent = ({ ...props }) =>
  render(
    <HelmetProvider>
      <HomePage {...props} />
    </HelmetProvider>,
  );

describe('<HomePage/>', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent({});
    expect(spy).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { container } = renderComponent({});
    expect(container.firstChild).toMatchSnapshot();
  });
});
