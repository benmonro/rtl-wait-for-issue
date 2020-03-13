import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should match snapshot async", async () => {
  const mockApi = jest.fn();
  render(<App callApi={mockApi} />);
  fireEvent.click(screen.getByText("click me"));

  await waitFor(() => {
    // expect(mockApi).toBeCalled(); //fails without this.  but why?
    expect(mockApi.mock.calls).toMatchSnapshot()
  })

});

test("should show stuff", async () => {
  render(<App />);
  await waitFor(() => {

    expect(document.body).toMatchSnapshot();
  });
});
