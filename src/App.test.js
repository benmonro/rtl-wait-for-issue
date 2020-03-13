import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should match snapshot async", async () => {
  render(<App />);
  // fireEvent.click(screen.getByText("click me"));

  // waitFor()
  expect(document.body).toMatchSnapshot();
})
