import React					from 'react';
import styled	 				from 'styled-components';
import PropTypes 				from 'prop-types';
import ExtraPropTypes			from 'react-extra-prop-types';
import { Colors }               from '@narrow/theme';
import { Fonts } 				from '../fonts';
import Text 					from './Text';
 
const propTypes = {
	color: ExtraPropTypes.color,
	primitive: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']),
	extraSmall: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	extraLarge: PropTypes.bool,
	twoExtraLarge: PropTypes.bool,
};

const defaultProps = {
	color: Colors.GrayVeryDark,
	primitive: 'h1'
};

const fontConfig = {
	fontFamily: Fonts.GothamNarrowLight,
	fontWeight: 'normal',
	twoExtraLarge: { fontSize: 32, lineHeight: 32 },
	extraLarge: { fontSize: 28, lineHeight: 28 },
	large: { fontSize: 20, lineHeight: 20 },
	medium: { fontSize: 18, lineHeight: 18 },
	small: { fontSize: 16, lineHeight: 16 },
	extraSmall: { fontSize: 14, lineHeight: 14 }
};

const HeadingComponent = styled(Text)`
	font-weight: ${fontConfig.fontWeight};
	font-family: ${fontConfig.fontFamily};
	color: ${({color})=>color};
`;

/**
Heading Description
*/
const Heading = ({ 
	extraSmall,
	small, 
	medium, 
	large, 
	extraLarge,
	twoExtraLarge,
	color, 
	primitive, 
	children, 
	...rest }) => {

	//defaults to small
	if(!extraSmall &&
		!small &&
		!medium &&
		!large &&
		!extraLarge &&
		!twoExtraLarge) {
		small = true;
	}

	let sizeConfig = {};

	if (twoExtraLarge) { 
		sizeConfig = fontConfig.twoExtraLarge;
	} else if (extraLarge) { 
		sizeConfig = fontConfig.extraLarge;
	} else if (large) { 
		sizeConfig = fontConfig.large;
	} else if (medium) {
		sizeConfig = fontConfig.medium;
	} else if (small) { 
		sizeConfig = fontConfig.small;
	} else if (extraSmall) { 
		sizeConfig = fontConfig.extraSmall;
	}

	return (<HeadingComponent
	color={color}
	primitive={primitive}
	fontSize={sizeConfig.fontSize}
	lineHeight={sizeConfig.lineHeight}
	{...rest}>
		{children}
	</HeadingComponent>);
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export { Heading };