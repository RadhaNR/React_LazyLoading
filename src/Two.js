import React from "react";

class Two extends React.Component {
    throwError=()=> {
        throw new Error("I am unable to load from Two :(");
    }
    render() {
        return (
            <div>
                <hr/>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div>Five</div>
                <button onClick={this.throwError}>Throw Error</button>
                <br/>
            </div>
        )
    }
}

export default Two;