import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

<<<<<<< HEAD
import { Button } from "../src/index";
=======
import { Example } from "../src/index";
>>>>>>> d05ffc586b82294f09c897945e9f4986952326bd

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="test-area">
<<<<<<< HEAD
                <Button label="Exemplo" onClick={()=>console.log("Click")}/>
=======
                <Example label="Exemplo" />
>>>>>>> d05ffc586b82294f09c897945e9f4986952326bd
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));
<<<<<<< HEAD
=======

>>>>>>> d05ffc586b82294f09c897945e9f4986952326bd
