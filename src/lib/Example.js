import React from "react";
import '../style/example.styl';

const Example = (props) => {
    return (
        <button className={`example${props.className ? props.className : ""}`} {...props}>
            Example Button
        </button>
    );
}

export default Example;