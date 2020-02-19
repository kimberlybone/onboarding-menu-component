import React                            from 'react';
import { storiesOf, addDecorator }      from '@storybook/react';
import { withKnobs, text, select }      from '@storybook/addon-knobs';
import { Jumbo, 
         SubJumbo, 
         Heading, 
         SubHeading, 
         Body, 
         TitleHighlight }               from './index';
import { Colors }                       from '@narrow/theme';

const primitiveOptions = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'h6': 'h6',
  'p' : 'p',
  'span': 'span'
};

const colorOptions = {
  GrayVeryDark: Colors.GrayVeryDark,
  Blue: Colors.Blue,
  Orange: Colors.Orange,
  Purple: Colors.Purple,
  Green: Colors.Green,
  Red: Colors.Red,
  Yellow: Colors.Yellow,
  GrayDark: Colors.GrayDark,
  Gray: Colors.Gray,
  GrayLight: Colors.GrayLight,
  White: Colors.White
};

const sizeOptions = {
  ExtraLarge: 'extraLarge',
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
  ExtraSmall: 'extraSmall'
};

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Jumbo', () => {
    const size = select('Size', sizeOptions, 'extraLarge');
    return <Jumbo
    {...{[size]: true}}
    color={select('Color', colorOptions)}
    primitive={select('Primitive', primitiveOptions)}
    >
      {text('Title', 'Jumbo')}
    </Jumbo>;

  })
  .add('Heading', () => {
    const size = select('Size', sizeOptions, 'extraLarge');
    return <Heading
    {...{[size]: true}}
    color={select('Color', colorOptions)}
    primitive={select('Primitive', primitiveOptions)}
    >
      {text('Title', 'Heading')}
    </Heading>;

  })
  .add('Body', () => {
    const size = select('Size', sizeOptions, 'extraLarge');
    return <Body
    {...{[size]: true}}
    color={select('Color', colorOptions)}
    primitive={select('Primitive', primitiveOptions)}
    >
      {text('Title', 'Body')}
    </Body>;

  })
  .add('TitleHighlight', () => {
    const size = select('Size', sizeOptions, 'extraLarge');
    return <TitleHighlight
    {...{[size]: true}}
    color={select('Color', colorOptions)}
    lineColor={select('Line Color', colorOptions)}>
      {text('Title', 'Title')}
    </TitleHighlight>;

  });