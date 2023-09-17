import { render, screen } from '@testing-library/react';

import { Search } from '../index';

it('Renders search bar', () => {
  render(<Search />);

  expect(screen.getByRole('textbox')).toBeInTheDocument();
});