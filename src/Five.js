import React from "react";
class Five extends React.Component {
    constructor() {
        super();
        this.state = {
            components: [], // for multiple component array
            Six: null // for single component
        }
    }
    loadComp = () => {
        // load component dynamically
        import("./Six").then(component => {
            this.setState({
                components: this.state.components.concat(component.default), // append new component to array
                Six: component.default // assign new component 
            })
        }).catch(err => {
            console.log(err)
        });
    }

    thrwErr = ()=> {
        throw new Error("Unable to load the component!!!")
    }
    render() {
        const { components, Six } = this.state;

        // Iterate array and return multiple component
        const componentsElements = components.map((Component, i) => (
            <Component key={i} />
        ));

        // return new component
        const sixElements = (Six !== null) ? <Six /> : null;

        return (
            <div>
                <hr />
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div>Five</div>
                <hr />
                <button onClick={this.loadComp}>Load Sixth Component</button>
                <button onClick={this.thrwErr}>Throw Error</button>



                {/* <div className="App">{componentsElements}</div> */}


                <div className="App">{sixElements}</div>



            </div>
        )
    }
}

export default Five;