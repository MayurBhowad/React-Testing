import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

it('should take snapSHot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
})