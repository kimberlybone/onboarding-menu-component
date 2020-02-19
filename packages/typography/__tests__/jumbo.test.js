import React        from 'react';
import renderer     from 'react-test-renderer';
import { Jumbo }         from '../src';
import { Colors }         from '@narrow/theme';
import 'jest-styled-components'

jest.useFakeTimers();

let testFn = jest.fn();

//Snapshot
test('Jumbo renders correctly', () => {
  const tree = renderer.create(<Jumbo title={'Jumbo'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

//Default props
test('renders default props correctly', () => {
  const testRenderer = renderer.create(<Jumbo 
                                        title={'Jumbo'}/>);

  const testInstance = testRenderer.root;

  expect(testInstance.props.color).toBe(Colors.GrayVeryDark);
  expect(testInstance.props.primitive).toBe('h1');
});


//Other Prop Tests

test('renders fourExtraSmall correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo fourExtraSmall'} 
                                              fourExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.fourExtraSmall).toBeTruthy();
});

test('renders threeExtraSmall correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo threeExtraSmall'} 
                                              threeExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.threeExtraSmall).toBeTruthy();
});

test('renders twoExtraSmall correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo twoExtraSmall'} 
                                              twoExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.twoExtraSmall).toBeTruthy();
});

test('renders extraSmall correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo extraSmall'} 
                                              extraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraSmall).toBeTruthy();
});

test('renders small correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo small'} 
                                              small/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.small).toBeTruthy();
});

test('renders medium correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo medium'} 
                                              medium/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.medium).toBeTruthy();
});

test('renders large correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo large'} 
                                              large/>);
  const testInstance = testRenderer.root; 
  expect(testInstance.props.large).toBeTruthy();
});

test('renders extraLarge correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo extraLarge'} 
                                              extraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraLarge).toBeTruthy();
});

test('renders twoExtraLarge correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo twoExtraLarge'} 
                                              twoExtraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.twoExtraLarge).toBeTruthy();
});

test('renders threeExtraLarge correctly', () => {
  const testRenderer = renderer.create(<Jumbo title={'Jumbo threeExtraLarge'} 
                                              threeExtraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.threeExtraLarge).toBeTruthy();
});

//// Config Tests
test('renders JUMBO fontconfig Large correctly', () => {
  const tree = renderer.create(<Jumbo title={'JUMBO fontconfig Large'} large />).toJSON();
  expect(tree).toHaveStyleRule('font-family', `GothamNarrowUltra`);
  expect(tree).toHaveStyleRule('font-weight', `bold`);
  expect(tree).toHaveStyleRule('font-size', `104px`);
  expect(tree).toHaveStyleRule('line-height', `104px`);
});

//// Viewport Tests
test('renders smallMobile correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'smallMobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallMobile');
});
test('renders mobile correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'mobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('mobile');
});
test('renders tablet correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'tablet'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('tablet');
});
test('renders smallDesktop correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'smallDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallDesktop');
});
test('renders desktop correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'desktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('desktop');
});
test('renders largeDesktop correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'largeDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('largeDesktop');
});
test('renders hdDesktop correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'hdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('hdDesktop');
});
test('renders uhdDesktop correctly', () => {
  const testRenderer = renderer.create(<Jumbo viewport = {'uhdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('uhdDesktop');
});
