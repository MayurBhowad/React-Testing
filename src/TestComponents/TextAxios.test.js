import { fireEvent, render, waitFor, waitForElement } from '@testing-library/react';
import TestAxios from './TextAxios';
import axiosMock from 'axios';

jest.mock('axios')
it('shoul display a loading text', () => {
    const { getByTestId } = render(<TestAxios />)
    expect(getByTestId('loading')).toHaveTextContent('Loading...')
})

it('should load and display the data', async () => {
    const url = '/greeting'
    const { getByTestId } = render(<TestAxios url={url} />)

    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: 'hello there' },
    })

    fireEvent.click(getByTestId('fetch-data'))

    const greetingData = await waitFor(() => getByTestId('show-data'))

    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(greetingData).toHaveTextContent('hello there')
})