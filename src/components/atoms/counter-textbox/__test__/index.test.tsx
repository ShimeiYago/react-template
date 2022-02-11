import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CounterTextbox, Props } from '..';

const props: Props = {
  value: 'text',
  ariaLabel: 'label',
  disabled: false,
  onChange: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  const renderer = ShallowRenderer.createRenderer();

  it('basic', () => {
    const result = renderer.render(<CounterTextbox />);
    expect(result).toMatchSnapshot();
  });

  it('with props', () => {
    const result = renderer.render(<CounterTextbox {...props} />);
    expect(result).toMatchSnapshot();
  });
});
