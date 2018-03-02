import React from "react";
import PropTypes from "prop-types";

/**
* Renders the Button Component
* @param  {String}    	className is a string that will be attached to the component's className (optional)
* @param  {Boolean}     disabled specifies if the button should be disabled
* @param  {String}    	label defines a label for the button
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @param  {String}    	type defines they type of the button (button, reset or submit)
* @param  {String}    	value specifies an initial value for the button
* @return {JSX}         Button Component
*/
const Button = ({ className, disabled, label, onClick, type, value }) => {
	return (
        <button className={`button ${className ? className : ""}`} disabled ={disabled} onClick={onClick} type={type} value={value}>
            {label || ""}
		</button>
	);
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;