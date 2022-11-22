/**
 * Tests for Form
 */

import { render, cleanup, reactHookForm } from 'jest.setup';

import { Form, Field } from 'app/components/Form';

afterEach(cleanup);

const mockFormName = 'testForm';
const mockOnSubmit = jest.fn();

const Component = () => {
  const form = reactHookForm.useForm({});
  return (
    <Form formName={mockFormName} onSubmit={mockOnSubmit} form={form}>
      <Field.Input name="firstName" />

      <button type="submit">Save</button>
    </Form>
  );
};

const renderComponent = () => {
  return render(<Component />);
};

describe('<Form/>', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    const container = renderComponent();
    expect(container.baseElement).toMatchSnapshot();
  });
});
