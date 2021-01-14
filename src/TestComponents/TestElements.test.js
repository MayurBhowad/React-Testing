import { cleanup, render } from "@testing-library/react";
import TestElements from "./TestElements";


afterEach(cleanup)

it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />)
    expect(getByTestId('counter')).toHaveTextContent(0);
})

it('up button should be enabled', () => {
    const { getByTestId } = render(<TestElements />)
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
})

it('down button should be disabled', () => {
    const { getByTestId } = render(<TestElements />)
    expect(getByTestId('button-down')).toBeDisabled()
})