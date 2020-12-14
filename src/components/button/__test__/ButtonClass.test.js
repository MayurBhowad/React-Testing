import React from 'react';
import renderer from 'react-test-renderer';
import ButtonClass from '../ButtonClass';


test('Button changes the class on hover', () => {
    const component = renderer.create(
        <ButtonClass>this is Button</ButtonClass>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();
    tree = component.toJSON()
    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();
    tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})
