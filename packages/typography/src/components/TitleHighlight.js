import React			from 'react';
import styled	 		from 'styled-components';
import PropTypes 		from 'prop-types';
import ExtraPropTypes	from 'react-extra-prop-types';
import { Colors }       from '@narrow/theme';
import { Fonts } 		from '../fonts';
import { Jumbo }			from './Jumbo';

const propTypes = {
	color: ExtraPropTypes.color,
	lineColor: ExtraPropTypes.color,
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
	lineColor: Colors.Blue,
	primitive: 'h1'
};

const fontConfig = {
	threeExtraLarge: { fontSize: 160, lineHeight: 160, paddingRight: 4, linear: 74},
	twoExtraLarge: { fontSize: 140, lineHeight: 140, paddingRight: 4, linear: 70},
	extraLarge: { fontSize: 120, lineHeight: 120, paddingRight: 3, linear: 68},
	large: { fontSize: 104, lineHeight: 104, paddingRight: 3, linear: 68},
	medium: { fontSize: 86, lineHeight: 86, paddingRight: 1, linear: 64},
	small: { fontSize: 74, lineHeight: 74, paddingRight: 1, linear: 64},
	extraSmall: { fontSize: 56, lineHeight: 56, paddingRight: .5, linear: 62 },
	twoExtraSmall: { fontSize: 48, lineHeight: 48, paddingRight: .5, linear: 62},
	threeExtraSmall: { fontSize: 32, lineHeight: 32, paddingRight: .25, linear: 60},
	fourExtraSmall: { fontSize: 24, lineHeight: 24, paddingRight: .25, linear: 58}
};

const TitleHighlightComponent = styled(Jumbo)`
	color: ${({color})=>color};
	padding-right: ${({paddingRight})=>paddingRight}%;
	background: linear-gradient(to bottom, transparent ${({linear})=>linear}%, ${({lineColor})=>lineColor} ${({linear})=>linear}%);
  	display: inline;
`;

/**
Title Highlight Description
*/
const TitleHighlight = ({
	color,
	lineColor,
	fontFamily,
	fontWeight,
	fontSize,
	lineHeight,
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

	return (<TitleHighlightComponent
		color={color}
		lineColor={lineColor}
		fontSize={sizeConfig.fontSize}
		lineHeight={sizeConfig.lineHeight}
		paddingRight={sizeConfig.paddingRight}
		linear={sizeConfig.linear}
		{...rest}>{children}</TitleHighlightComponent>);
};

TitleHighlight.propTypes = propTypes;
TitleHighlight.defaultProps = defaultProps;

export { TitleHighlight };



