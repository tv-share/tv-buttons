import React from "react";
import PropTypes from "prop-types";


/**
* Renders the ToggleButton Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {Boolean}     isEnabled specifies if the button is currently on enabled position
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @return {JSX}         ToggleButton Component
*/
const ToggleButton = ({ className, isEnabled, onClick } ) => {
	return (
		<div className={`toggleButton ${className ? className : ""}`}>
			<div className={`box ${isEnabled ? "-on" : "-off"}`} onClick={onClick}>
            	<div className={`circle ${isEnabled ? "-on" : "-off"}`}/>
			</div>
		</div>
	);
};

ToggleButton.propTypes = {
	className: PropTypes.string,
	isEnabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ToggleButton;