import React from "react";
import PropTypes from "prop-types";

import "../style/switchButton";

/**
* Renders the Switch Component
* @param  {String}    	className is a string that will be attached to the select input's className (optional)
* @param  {Boolean}     enabled specifies if the button is currently on enabled position
* @param  {Function}    onClick defines a function to be called whenever the button is pressed
* @param  {Function}    onLabel defines a label for the ON position (right)
* @param  {Function}    offLabel defines a label for the OFF position (left)
* @return {JSX}         Switch Component
*/
const SwitchButton = ({ className, enabled, onClick, onLabel = "", offLabel = "" }) => {
	return (
		<div className="tv-switch-btn">
			<label>
				{offLabel}
				<input checked={enabled} onChange={onClick} type="checkbox" />
				<span className="tv-lever"></span>
				{onLabel}
			</label>
		</div>
	);
};

SwitchButton.propTypes = {
	enabled: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	onLabel: PropTypes.string,
	offLabel: PropTypes.string
};

export default SwitchButton;