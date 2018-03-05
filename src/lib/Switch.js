import React from "react";
import PropTypes from "prop-types";


/**
* Renders the Switch Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {Boolean}     isEnabled specifies if the button is currently on enabled position
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @return {JSX}         Switch Component
*/
const Switch = ({ className, isEnabled, onClick } ) => {
	return (
		<div className={`switch ${className ? className : ""}`}>
			<div className={`box ${isEnabled ? "-on" : "-off"}`} onClick={onClick}>
            	<div className={`circle ${isEnabled ? "-on" : "-off"}`}/>
			</div>
		</div>
	);
};

Switch.propTypes = {
	className: PropTypes.string,
	isEnabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Switch;