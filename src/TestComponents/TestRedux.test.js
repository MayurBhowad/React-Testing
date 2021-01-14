import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, reducer } from "./store/reducer";
import TestRedux from "./TestRedux";

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store} >{component}</Provider>),
        store
    }
}

afterEach(cleanup)

it('check initial state is 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increment the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, { initialState: { count: 5 } });
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('6')
})
it('decrement the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, { initialState: { count: 5 } });
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('4')
})