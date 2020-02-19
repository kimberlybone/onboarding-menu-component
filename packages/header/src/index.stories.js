import React                              from 'react';
import { storiesOf, addDecorator }        from '@storybook/react';
import styled                             from "styled-components";
import { withKnobs, select, text }				from '@storybook/addon-knobs';
import { MainTitle, Status }              from './index';
storiesOf( 'Header', module )
  .addDecorator(withKnobs)
  .add('MainTitle', () => {
    return <MainTitle></MainTitle>
  })
  .add('Status', () => {
    return <Status></Status>
  })
