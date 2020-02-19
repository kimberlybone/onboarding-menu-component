import React, { Component } from 'react'
import { storiesOf } 				from '@storybook/react';
import { Jumbo }						from '@narrow/typography';

storiesOf('Welcome', module)
.add('Welcome', () => {
  return (<Jumbo>Welcome</Jumbo>
  );
});
