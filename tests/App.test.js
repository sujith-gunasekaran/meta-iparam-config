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

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...originalModule,
    BrowserRouter: () => <div />,
    Routes: () => <div />,
    Route: () => <div />,
    Link: () => <div />
  };
});

test('renders learn react link', () => {
  const result = render(<App client={{}} />);
  const linkElement = screen.getByText(/Test - 190/i);
  expect(linkElement).toBeInTheDocument();
});
