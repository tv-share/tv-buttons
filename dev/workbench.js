import React from "react";
import ReactDOM from "react-dom";

import SwitchButton from "../src/lib/SwitchButton";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enabled: false
        };
    }

    render() {
        return (
            <section className="test-area">
                <SwitchButton enabled={this.state.enabled} onClick={() => this.setState({ enabled: !this.state.enabled })}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
