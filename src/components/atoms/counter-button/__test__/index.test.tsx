import ShallowRenderer from 'react-test-renderer/shallow';
import { CounterButton, Props } from '..';

const props: Props = {
  variant: 'async',
  ariaLabel: 'label',
  children: 'button',
  onClick: jest.fn(),
  disabled: true,
};

describe('Shallow Snapshot Tests', () => {
  const renderer = ShallowRenderer.createRenderer();

  it('default', () => {
    const result = renderer.render(<CounterButton />);
    expect(result).toMatchSnapshot();
  });

  it('with props', () => {
    const result = renderer.render(<CounterButton {...props} />);
    expect(result).toMatchSnapshot();
  });
});
