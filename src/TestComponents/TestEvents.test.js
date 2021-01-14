import { cleanup, fireEvent, render } from "@testing-library/react";
import TestEvents from "./TestEvents";

afterEach(cleanup);

// describe('all Test Events', () => {
test('Increament counter', () => {
    const { getByTestId } = render(<TestEvents />)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1')
})
test('Decreament counter', () => {
    const { getByTestId } = render(<TestEvents />)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('1')
})
// })