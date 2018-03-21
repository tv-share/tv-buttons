import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

<<<<<<< HEAD
import { FloatingActionButton } from "../src/index";
=======
import { Button } from "../src/index";
>>>>>>> 074ca17bda29e2972688675373ace7b1be373eb8

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
<<<<<<< HEAD
                <FloatingActionButton icon="https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_call_white_24px.svg" fixed/>
=======
                <Button label="Exemplo" onClick={()=>console.log("Click")}/>
>>>>>>> 074ca17bda29e2972688675373ace7b1be373eb8
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
