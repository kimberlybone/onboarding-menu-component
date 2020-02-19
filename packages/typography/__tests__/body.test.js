import React        from 'react';
import renderer     from 'react-test-renderer';
import { Body }         from '../src';
import { Colors }         from '@narrow/theme';
import 'jest-styled-components'
   
jest.useFakeTimers();

let testFn = jest.fn();

//Snapshot
test('Body renders correctly', () => {
  const tree = renderer.create(<Body title={'Body'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});


//Default props
test('renders default props correctly', () => {
  const testRenderer = renderer.create(<Body 
                                        title={'Body'}/>);

  const testInstance = testRenderer.root;

  expect(testInstance.props.color).toBe(Colors.GrayVeryDark);
  expect(testInstance.props.primitive).toBe('p');
});


//Other Prop Tests
test('renders extraSmall correctly', () => {
  const testRenderer = renderer.create(<Body title={'Body extraSmall'} 
                                             extraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraSmall).toBeTruthy();
});

test('renders small correctly', () => {
  const testRenderer = renderer.create(<Body title={'Body small'} 
                                             small/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.small).toBeTruthy();
});

test('renders medium correctly', () => {
  const testRenderer = renderer.create(<Body title={'Body medium'} 
                                             medium/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.medium).toBeTruthy();
});

test('renders large correctly', () => {
  const testRenderer = renderer.create(<Body title={'Body large'} 
                                             large/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.large).toBeTruthy();
});

test('renders extraLarge correctly', () => {
  const testRenderer = renderer.create(<Body title={'Body extraLarge'} 
                                             extraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraLarge).toBeTruthy();
});

//// Config Tests
test('renders Body fontconfig Large correctly', () => {
  const tree = renderer.create(<Body title={'Body fontconfig Large'} large />).toJSON();
  expect(tree).toHaveStyleRule('font-family', `Open Sans`);
  expect(tree).toHaveStyleRule('font-weight', `normal`);
  expect(tree).toHaveStyleRule('font-size', `20px`);
  expect(tree).toHaveStyleRule('line-height', `28px`);
});

//// Viewport Tests
test('renders smallMobile correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'smallMobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallMobile');
});
test('renders mobile correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'mobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('mobile');
});
test('renders tablet correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'tablet'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('tablet');
});
test('renders smallDesktop correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'smallDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallDesktop');
});
test('renders desktop correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'desktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('desktop');
});
test('renders largeDesktop correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'largeDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('largeDesktop');
});
test('renders hdDesktop correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'hdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('hdDesktop');
});
test('renders uhdDesktop correctly', () => {
  const testRenderer = renderer.create(<Body viewport = {'uhdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('uhdDesktop');
});
