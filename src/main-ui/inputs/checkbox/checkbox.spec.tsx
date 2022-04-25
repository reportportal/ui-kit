import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckbox } from './checkbox.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCheckbox />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
