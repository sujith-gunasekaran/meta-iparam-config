import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../app/components/App';

jest.mock('@freshworks/crayons/react', () => {
  const FwButton = () => <div />
  const FwInput = () => <div />
  return {
    FwButton,
    FwInput
  }
});

test('renders learn react link', () => {
  const result = render(<App client={{}} />);
  const linkElement = screen.getByText(/Test - 1/i);
  expect(linkElement).toBeInTheDocument();
});
