import React from 'react';
import { render } from '@testing-library/react';
import { BasicInputCheckbox } from './input-checkbox.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInputCheckbox />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
