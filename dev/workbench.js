import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import { FloatingActionButton } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
                <FloatingActionButton icon="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_call_white_24px.svg" fixed/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

