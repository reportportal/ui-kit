import React from 'react';
import { render } from '@testing-library/react';
import { BasicFigmaEmbed } from './figma-embed.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFigmaEmbed />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
