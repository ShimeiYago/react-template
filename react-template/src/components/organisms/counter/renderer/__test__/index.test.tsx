import React from 'react';
import { create } from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { Renderer, Props } from '..';

const basicProps: Props = {
  count: 0,
  counterStatus: 'idle',

  decrement: jest.fn(),
  increment: jest.fn(),
  incrementByAmount: jest.fn(),
  incrementIfOdd: jest.fn(),
  fetchCount: jest.fn(),
  postCount: jest.fn(),
}

describe('Shallow Snapshot Tests', () => {
  const renderer = ShallowRenderer.createRenderer();

  it('basic', () => {
    const result = renderer.render(<Renderer {...basicProps} />);
    expect(result).toMatchSnapshot();
  });

  it('loading', () => {
    const result = renderer.render(
      <Renderer {...basicProps} counterStatus='loading' />
    );
    expect(result).toMatchSnapshot();
  });

  it('failed', () => {
    const result = renderer.render(
      <Renderer {...basicProps} counterStatus='failed' />
    );
    expect(result).toMatchSnapshot();
  });
});

test('incrementAmount should change when value is inputted.', () => {
  const inputValue = 'input value';

  const testInstance = create(<Renderer {...basicProps} />).root;
  const input = testInstance.findByType('input');

  expect(testInstance.instance.state.incrementAmount).toBe('2');
  input.props.onChange({target:{value:inputValue}});
  expect(testInstance.instance.state.incrementAmount).toBe(inputValue);
});
