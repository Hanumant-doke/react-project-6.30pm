import React from "react";
function BasicFunctionComponentPropsexample(props){
    console.log(props);
    return(
        <div>
            <h1>my name is {props.myName} <br/>my job role is {props.jobrole}</h1>
        </div>
    )
}
export default BasicFunctionComponentPropsexample;