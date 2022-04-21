import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlainButton } from './plain-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPlainButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
