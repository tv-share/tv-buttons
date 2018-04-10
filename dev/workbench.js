import React from "react";
import ReactDOM from "react-dom";

import SwitchButton from "../src/lib/SwitchButton";
import "../src/styles/switchButton.styl";
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
                <SwitchButton enabled={true} offLabel="Luladrão" onLabel="Ladrécio Neves" onClick={() => console.log("clicou")}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));