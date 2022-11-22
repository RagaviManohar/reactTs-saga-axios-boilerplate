import { cleanup, createRenderer, StoreWrapper } from 'jest.setup';

import { App } from '../index';

const renderer = createRenderer();

afterEach(cleanup);

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(
      <StoreWrapper>
        <App />
      </StoreWrapper>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
