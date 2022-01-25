import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
import { Renderer } from '..';

describe('Shallow Snapshot Tests', () => {
  const renderer = ShallowRenderer.createRenderer();

  it('basic', () => {
    const result = renderer.render(<Renderer />);
    expect(result).toMatchSnapshot();
  });
});
