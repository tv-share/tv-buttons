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
                <FloatingActionButton label="Exemplo" icon="https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487_960_720.png" position="-top-right" />
                <FloatingActionButton label="Exemplo" icon="https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487_960_720.png" position="-top-left" />
                <FloatingActionButton label="Exemplo" icon="https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487_960_720.png" position="-bottom-left" />
                <FloatingActionButton label="Exemplo" icon="https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487_960_720.png" position="-bottom-right" />
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

