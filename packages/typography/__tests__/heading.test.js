import React        from 'react';
import renderer     from 'react-test-renderer';
import { Heading }         from '../src';
import { Colors }         from '@narrow/theme';

jest.useFakeTimers();

let testFn = jest.fn();

//Snapshot
test('Heading renders correctly', () => {
  const tree = renderer.create(<Heading title={'Heading'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

//Default props
test('renders default props correctly', () => {
  const testRenderer = renderer.create(<Heading 
                                        title={'Heading'}/>);

  const testInstance = testRenderer.root;

  expect(testInstance.props.color).toBe(Colors.GrayVeryDark);
  expect(testInstance.props.primitive).toBe('h1');
});


//Other Prop Tests
test('renders extraSmall correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading extraSmall'} 
                                                extraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraSmall).toBeTruthy();
});

test('renders small correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading small'} 
                                                small/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.small).toBeTruthy();
});

test('renders medium correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading medium'} 
                                                medium/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.medium).toBeTruthy();
});

test('renders large correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading large'} 
                                                large/>);
  const testInstance = testRenderer.root; 
  expect(testInstance.props.large).toBeTruthy();
});

test('renders extraLarge correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading extraLarge'} 
                                                extraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraLarge).toBeTruthy();
});

test('renders twoExtraLarge correctly', () => {
  const testRenderer = renderer.create(<Heading title={'Heading twoExtraLarge'} 
                                                twoExtraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.twoExtraLarge).toBeTruthy();
});


//// Config Tests
test('renders Heading fontconfig Large correctly', () => {
  const tree = renderer.create(<Heading title={'Heading fontconfig Large'} large />).toJSON();
  expect(tree).toHaveStyleRule('font-family', `GothamNarrowLight`);
  expect(tree).toHaveStyleRule('font-weight', `normal`);
  expect(tree).toHaveStyleRule('font-size', `20px`);
  expect(tree).toHaveStyleRule('line-height', `20px`);
});

//// Viewport Tests
test('renders smallMobile correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'smallMobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallMobile');
});
test('renders mobile correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'mobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('mobile');
});
test('renders tablet correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'tablet'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('tablet');
});
test('renders smallDesktop correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'smallDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallDesktop');
});
test('renders desktop correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'desktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('desktop');
});
test('renders largeDesktop correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'largeDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('largeDesktop');
});
test('renders hdDesktop correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'hdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('hdDesktop');
});
test('renders uhdDesktop correctly', () => {
  const testRenderer = renderer.create(<Heading viewport = {'uhdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('uhdDesktop');
});
