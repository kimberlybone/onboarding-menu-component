import React 			from 'react';
import styled 			from 'styled-components';
import PropTypes 		from 'prop-types';
import { Button } 		from './Button';
import ExtraPropTypes     from 'react-extra-prop-types';

const propTypes = {
  buttonSize: PropTypes.oneOf(['large', 'medium']),
  textColor: ExtraPropTypes.color,
  backgroundColor: ExtraPropTypes.color
}
const defaultProps = {
  textColor: Colors.White,
  backgroundColor: Colors.Purple,
  buttonSize: 'large'
}
const ButtonComponent = styled.button`
	height: 32px;
	width: 121px;
`
const Button = (props) => {
  return(<ButtonComponent
    backgroundColor={props.backgroundColor}
    buttonSize={buttonSize}
    textColor={textColor}
    role="button"
    {...props}></ButtonComponent>)
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export { Button }
