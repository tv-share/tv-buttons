import React from "react";
import PropTypes from "prop-types";

import "../style/button";

/**
* Renders the Button Component
* @param  {String}    	className is a string that will be attached to the component's className (optional)
* @param  {Boolean}     disabled specifies if the button should be disabled
* @param  {String}    	label defines a label for the button
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @param  {String}    	type defines they type of the button (button, reset or submit)
* @param  {String}    	value specifies an initial value for the button
* @param  {Object}      A object with one or more React Synthetic Events
* @return {JSX}         Button Component
*/
const Button = ({ className, disabled, label, onClick, type = "button", value, events = {} }) => {
	return (
		<button
			className={`tv-button ${className ? className : ""}`}
			disabled={disabled}
			onClick={onClick}
			type={type}
			value={value}
			{...events}>
			{label || ""}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
	events: PropTypes.object
};

export default Button;