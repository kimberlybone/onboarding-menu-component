import React        from 'react';
import renderer     from 'react-test-renderer';
import { TitleHighlight, Text, Fonts }         from '../src';
import { Colors }         from '@narrow/theme';
import 'jest-styled-components'

jest.useFakeTimers();

let testFn = jest.fn();

//Snapshot
test('TitleHighlight renders correctly', () => {
  const tree = renderer.create(<TitleHighlight title={'TitleHighlight'}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

//Default props
test('renders default props correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight 
                                        title={'TitleHighlight'}/>);

  const testInstance = testRenderer.root;

  expect(testInstance.props.color).toBe(Colors.GrayVeryDark);
  expect(testInstance.props.lineColor).toBe(Colors.Blue);
  expect(testInstance.props.primitive).toBe('h1');
});


//Other Prop Tests
test('renders fourExtraSmall correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight fourExtraSmall'} 
                                                       fourExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.fourExtraSmall).toBeTruthy();
});

test('renders threeExtraSmall correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight threeExtraSmall'} 
                                                       threeExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.threeExtraSmall).toBeTruthy();
});

test('renders twoExtraSmall correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight twoExtraSmall'} 
                                                       twoExtraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.twoExtraSmall).toBeTruthy();
});

test('renders extraSmall correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight extraSmall'} 
                                                       extraSmall/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraSmall).toBeTruthy();
});

test('renders small correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight small'} 
                                                       small/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.small).toBeTruthy();
});

test('renders medium correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight medium'} 
                                                       medium/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.medium).toBeTruthy();
});

test('renders large correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight large'} 
                                                       large/>);
  const testInstance = testRenderer.root; 
  expect(testInstance.props.large).toBeTruthy();
});

test('renders extraLarge correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight extraLarge'} 
                                                       extraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.extraLarge).toBeTruthy();
});

test('renders twoExtraLarge correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight twoExtraLarge'} 
                                                       twoExtraLarge/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.twoExtraLarge).toBeTruthy();
});

test('renders threeExtraLarge correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight title={'TitleHighlight threeExtraLarge'} 
                                                       threeExtraLarge/>);

  const testInstance = testRenderer.root;
  expect(testInstance.props.threeExtraLarge).toBeTruthy();
});


//// Config Tests
test('renders TitleHighlight fontconfig correctly', () => {
  const tree = renderer.create(<TitleHighlight title={'TitleHighlight fontconfig'} large />).toJSON();
  expect(tree).toHaveStyleRule('font-size', `104px`);
  expect(tree).toHaveStyleRule('font-weight', `bold`);
  expect(tree).toHaveStyleRule('line-height', `104px`);
  expect(tree).toHaveStyleRule('font-family', `GothamNarrowUltra`);
  expect(tree).toHaveStyleRule('padding-right', `3%`);
});

//// Viewport Tests
test('renders smallMobile correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'smallMobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallMobile');
});
test('renders mobile correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'mobile'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('mobile');
});
test('renders tablet correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'tablet'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('tablet');
});
test('renders smallDesktop correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'smallDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('smallDesktop');
});
test('renders desktop correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'desktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('desktop');
});
test('renders largeDesktop correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'largeDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('largeDesktop');
});
test('renders hdDesktop correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'hdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('hdDesktop');
});
test('renders uhdDesktop correctly', () => {
  const testRenderer = renderer.create(<TitleHighlight viewport = {'uhdDesktop'}/>);
  const testInstance = testRenderer.root;
  expect(testInstance.props.viewport).toBe('uhdDesktop');
});

