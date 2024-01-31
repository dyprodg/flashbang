import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('check if button press changes background color', () => {
  const { getByText, container } = render(<App />);
  const button = getByText('Drück mich');

  // Überprüfen, ob der Hintergrund zunächst schwarz ist
  expect(container.firstChild).toHaveStyle('background-color: black');

  // Button drücken und überprüfen, ob der Hintergrund weiß wird
  fireEvent.mouseDown(button);
  expect(container.firstChild).toHaveStyle('background-color: white');

  // Button loslassen und überprüfen, ob der Hintergrund wieder schwarz wird
  fireEvent.mouseUp(button);
  expect(container.firstChild).toHaveStyle('background-color: black');
});