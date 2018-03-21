import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

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
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
