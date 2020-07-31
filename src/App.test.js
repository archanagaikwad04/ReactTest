import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const { getByText, getAllByText, getByTestId } = render(<App />);
  const input = getByName("name");
  expect(getByName("getByName").length).toBe(1);
  fireEvent.onChange(input);
  expect(toBeInTheDocument("result")).toBeInTheDocument();
});

