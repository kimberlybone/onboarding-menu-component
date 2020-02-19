import React			from 'react';
import styled	 		from 'styled-components';
import PropTypes 		from 'prop-types';
import ExtraPropTypes	from 'react-extra-prop-types';
import { Colors }       from '@narrow/theme';
import { Fonts } 		from '../fonts';
import Text 			from './Text';

const propTypes = {
	color: ExtraPropTypes.color,
	primitive: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
	fourExtraSmall: PropTypes.bool,
	threeExtraSmall: PropTypes.bool,
	twoExtraSmall: PropTypes.bool,
	extraSmall: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	extraLarge: PropTypes.bool,
	twoExtraLarge: PropTypes.bool,
	threeExtraLarge: PropTypes.bool,
};

const defaultProps = {
	color: Colors.GrayVeryDark,
	primitive: 'h1'
};

const fontConfig = {
	fontFamily: Fonts.GothamNarrowUltra,
	fontWeight: 'bold',
	threeExtraLarge: { fontSize: 160, lineHeight: 160},
	twoExtraLarge: { fontSize: 140, lineHeight: 140},
	extraLarge: { fontSize: 120, lineHeight: 120},
	large: { fontSize: 104, lineHeight: 104},
	medium: { fontSize: 86, lineHeight: 86},
	small: { fontSize: 74, lineHeight: 74},
	extraSmall: { fontSize: 56, lineHeight: 56},
	twoExtraSmall: { fontSize: 48, lineHeight: 48},
	threeExtraSmall: { fontSize: 32, lineHeight: 32},
	fourExtraSmall: { fontSize: 24, lineHeight: 24},
	fiveExtraSmall: { fontSize: 20, lineHeight: 20 }
};

const JumboComponent = styled(Text)`
	font-weight: ${fontConfig.fontWeight};
	font-family: ${fontConfig.fontFamily};
	color: ${({color})=>color};
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

/**
Jumbo Description
*/
const Jumbo = ({  
	color, 
	primitive, 
	children, 
	threeExtraLarge,
	twoExtraLarge,
	extraLarge,
	large,
	medium,
	small,
	extraSmall,
	twoExtraSmall,
	threeExtraSmall,
	fourExtraSmall,
	...rest }) => {

	//defaults to extra large
	if(!fourExtraSmall &&
		!threeExtraSmall &&
		!twoExtraSmall &&
		!extraSmall &&
		!small &&
		!medium &&
		!large &&
		!extraLarge &&
		!twoExtraLarge &&
		!threeExtraLarge) {
		extraLarge = true;
	}

	let sizeConfig = {};

	if(threeExtraLarge) { 
		sizeConfig = fontConfig.threeExtraLarge;
	} else if(twoExtraLarge) { 
		sizeConfig = fontConfig.twoExtraLarge;
	} else if(extraLarge) { 
		sizeConfig = fontConfig.extraLarge;
	} else if (large) { 
		sizeConfig = fontConfig.large;
	} else if (medium) {
		sizeConfig = fontConfig.medium;
	} else if (small) { 
		sizeConfig = fontConfig.small;
	} else if (extraSmall) { 
		sizeConfig = fontConfig.extraSmall;
	} else if (twoExtraSmall) { 
		sizeConfig = fontConfig.twoExtraSmall;
	} else if (threeExtraSmall) { 
		sizeConfig = fontConfig.threeExtraSmall;
	} else if (fourExtraSmall) {
		sizeConfig = fontConfig.fourExtraSmall;
	}

	return (<JumboComponent
	color={color}
	primitive={primitive}
	fontSize={sizeConfig.fontSize}
	lineHeight={sizeConfig.lineHeight}
	{...rest}>
		{children}
	</JumboComponent>);
};

Jumbo.propTypes = propTypes;
Jumbo.defaultProps = defaultProps;

export { Jumbo };