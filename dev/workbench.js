import React from "react";
import ReactDOM from "react-dom";

import FloatingActionButton from "../src/FloatingActionButton";

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
                <FloatingActionButton label="Botão" onClick={() => console.log("clicou")}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));