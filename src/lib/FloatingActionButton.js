import React from "react";
import PropTypes from "prop-types";


/**
* Renders the SelectInput Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {String}      icon defines the path of the icon to be displayed inside the button
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @param  {String}      position defines the relative position of the button
* @return {JSX}         SelectInput Component
*/
const FloatingActionButton = ({ className, icon, onClick, position="-bottom-right" }) => {
	return (
		<div className={`floatingActionButton ${position} ${className ? className : ""}`} icon={icon} onClick={onClick}>
            <img src={icon}/>
		</div>
	);
};

FloatingActionButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    position: PropTypes.string
};

export default FloatingActionButton;