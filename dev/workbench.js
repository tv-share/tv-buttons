import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import SwitchButton from "../src/lib/SwitchButton";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEnabled: false
        };
    }

    render() {
        return (
            <section className="test-area">
                <SwitchButton />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
