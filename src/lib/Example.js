import React from "react";

const Example = (props) => {
	return (
		<button className={`example${props.className ? props.className : ""}`} {...props}>
            Example Button
		</button>
	);
};

export default Example;