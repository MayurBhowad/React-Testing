import { cleanup, fireEvent, render } from "@testing-library/react"
import CounterProvider, { Counter, CounterContext } from "./TestContext"

const renderWithContext = (component) => {
    return {
        ...render(
            <CounterProvider value={CounterContext} >
                {component}
            </CounterProvider>
        )
    }
}

afterEach(cleanup);

it('check if initial Value is 0', () => {
    const { getByTestId } = renderWithContext(<Counter />)
    expect(getByTestId('counter')).toHaveTextContent('0');
})

it('increament the count', () => {
    const { getByTestId } = renderWithContext(<Counter />)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1');
})
it('decreament the count', () => {
    const { getByTestId } = renderWithContext(<Counter />)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1');
})