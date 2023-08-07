import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "./Home";

test('renders home component', () => {
  render(<MemoryRouter><Home /></MemoryRouter>
  );
  const welcomeText = screen.getByText('Welcome to Expense Tracker!!', { exact: false });
  expect(welcomeText).toBeInTheDocument();
})

