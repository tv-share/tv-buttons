import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import { Button } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
                <Button label="Exemplo" onClick={()=>console.log("Click")}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
