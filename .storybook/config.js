import { configure } from '@storybook/react';
const path = require('path');
// automatically import all files ending in *.stories.js
let req = require.context('../packages', true, /src\/.*.stories.js/);
function loadStories() {
	require('./welcome');
  req.keys().forEach(filename => {
  	req(filename);
  });
}

configure(loadStories, module);
