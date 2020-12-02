import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import Button from './../Button';

import { render, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("render button correctly", () => {
    const { getByTestId } = render(<Button lable="Click me please"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click me please")
})

it("render button correctly", () => {
    const { getByTestId } = render(<Button lable="Save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Save")
})

it('match snapshot 1', () => {
    const tree = renderer.create(<Button lable="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('match snapshot 2', () => {
    const tree = renderer.create(<Button lable="Click me Please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})