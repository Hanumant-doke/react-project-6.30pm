import React, { Component } from "react";
class BasicClassComponentPropsExample extends Component{
    constructor(props){
        super();
        console.log(props);
    }
    render(){
        return(
            <div >
                    <h1>my name is {this.props.myName}</h1>
            </div>
        )
    }

}
export default BasicClassComponentPropsExample;