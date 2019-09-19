import React from "react";

class Six extends React.Component {
    constructor() {
        super();
        console.log("cons")
    }
    render() {
        console.log("render")
        return (
            <div>
                <hr/>
                this is component six
                <br/>
            </div>
        )
    }
}



// function Six () {
//     return(
//         <div>
//             this is component six
//         </div>
//     )
// }
export default Six;