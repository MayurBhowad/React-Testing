import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import TestAsync from "./TestAsync";

afterEach(cleanup);

it('increment counter after .5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />)
    fireEvent.click(getByTestId('button-up'))
    const counter = await waitFor(() => getByText('1'))
    expect(counter).toHaveTextContent('1')
})