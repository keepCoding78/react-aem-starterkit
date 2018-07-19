import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '../index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<TestComponent page="http://www.facebook.com">Facebook</TestComponent>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
  
it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<TestComponent>Facebook</TestComponent>).toJSON();
    expect(tree).toMatchSnapshot();
});
  
it('properly escapes quotes', () => {
    const tree = renderer
        .create(<TestComponent>{"\"Facebook\" \\'is \\ 'awesome'"}</TestComponent>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
  
it('changes the class when hovered', () => {
    const component = renderer.create(
        <TestComponent page="http://www.facebook.com">Facebook</TestComponent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
