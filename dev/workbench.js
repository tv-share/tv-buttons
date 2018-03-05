import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import { Switch } from "../src/index";

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
                <Switch onClick={()=>this.setState({isEnabled: !this.state.isEnabled})} isEnabled={this.state.isEnabled}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

