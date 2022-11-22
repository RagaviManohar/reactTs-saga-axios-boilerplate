import { render, cleanup, HelmetProvider } from 'jest.setup';

import { LoginPage } from 'app/pages/LoginPage';

afterEach(cleanup);

const renderComponent = ({ ...props }) =>
  render(
    <HelmetProvider>
      <LoginPage {...props} />
    </HelmetProvider>,
  );

describe('<LoginPage/>', () => {
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
