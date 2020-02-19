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
	extraSmall: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	extraLarge: PropTypes.bool
};

const defaultProps = {
	color: Colors.GrayVeryDark,
	primitive: 'p'

};

const fontConfig = {
	fontFamily: Fonts.OpenSans,
	fontWeight: 'normal',
	extraLarge: { fontSize: 26, lineHeight: 36 },
	large: { fontSize: 20, lineHeight: 28 },
	medium: { fontSize: 16, lineHeight: 22 },
	small: { fontSize: 14, lineHeight: 20 },
	extraSmall: { fontSize: 12, lineHeight: 18 }
};

const BodyComponent = styled(Text)`
	font-weight: ${fontConfig.fontWeight};
	font-family: ${fontConfig.fontFamily};
	color: ${({color})=>color};
	white-space: pre-line;
`;

/**
Body Description
*/
const Body = ({ 
	extraSmall, 
	small, 
	medium, 
	large, 
	extraLarge, 
	color, 
	primitive,
	width, 
	children, 
	...rest }) => {

	//defaults to extra small
	if(!extraSmall &&
		!small &&
		!medium &&
		!large &&
		!extraLarge) {
		extraSmall = true;
	}

	let sizeConfig = {};

	if(extraLarge) { 
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

	return (<BodyComponent
	
	color={color}
	primitive={primitive}
	fontSize={sizeConfig.fontSize}
	lineHeight={sizeConfig.lineHeight}
	{...rest}>
		{children}
	</BodyComponent>);
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export { Body };