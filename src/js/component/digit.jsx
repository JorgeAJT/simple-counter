import React from "react";

const Digit = (props) => {
    return (
    <div className="col-12 col-lg-1 card p-4 mx-2 bg-dark text-white text-center"> 
        <h1>{props.number}</h1>
    </div>

    )
}

export default Digit;