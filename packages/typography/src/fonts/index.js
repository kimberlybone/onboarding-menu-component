import WebFont from 'webfontloader';

const WebFontConfig = {
  custom: {
    families: ['GothamNarrowUltra', 'GothamNarrowLight'],
    urls: ['http://www.tightventures.com/fonts/export.css']
  },
  google:{
  	families: ['Open Sans']
  }
};

WebFont.load(WebFontConfig);

export const Fonts = {
	GothamNarrowUltra: 'GothamNarrowUltra',
	GothamNarrowLight: 'GothamNarrowLight',
  OpenSans: 'Open Sans'
};
