import React from "react";
import PropTypes from "prop-types";


/**
* Renders the SelectInput Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {String}      icon defines the path of the icon to be displayed inside the button
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @param  {String}      fixed defines if button should be fixed in the bottom right of the screen
* @param  {Object}      events is an object with one or more React Synthetic Events
* @return {JSX}         SelectInput Component
*/
const FloatingActionButton = ({ className, icon, onClick, fixed = false, events = {} }) => {
	return (
		<div className={`tv-floating-action-button ${fixed ? "-fixed" : ""} ${className ? className : ""}`} icon={icon} onClick={onClick}>
			<img src={icon}/>
		</div>
	);
};

FloatingActionButton.propTypes = {
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	fixed: PropTypes.bool,
	events: PropTypes.object
};

export default FloatingActionButton;