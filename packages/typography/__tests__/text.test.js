import React        from 'react';
import renderer     from 'react-test-renderer';
import { Text }         from '../src';

jest.useFakeTimers();

let testFn = jest.fn();

////////////////Snapshot////////////////
test('Text renders correctly', () => {
  const tree = renderer.create(<Text title={'Text'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

////////////////Default props////////////////
test('renders default props correctly', () => {
  const testRenderer = renderer.create(<Text 
                                        title={'Text'}/>);

  const testInstance = testRenderer.root;

  expect(testInstance.props.primitive).toBe('span');
});

