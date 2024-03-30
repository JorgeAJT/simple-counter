import React, { useState } from "react";
import Digit from "./digit";

const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const startCounter = () => {
        if (isRunning === false) {
            const id = setInterval(() => {
                setCounter((prevCounter) => (prevCounter + 1) % 1000000); // sino es funcion solo se actualiza una vez al ejecutarse la función
            }, 1000);
            setIntervalId(id);
            setIsRunning(true);
        }
    };

    const pauseCounter = () => {
        if (isRunning === true) {
            clearInterval(intervalId); // para el contador con clearInterval() y el ID del contador como parametro de entrada
            setIsRunning(false);
        }
    };

    const resetCounter = () => {
        clearInterval(intervalId);
        setCounter(0);
        setIsRunning(false);
    };

    const counterString = counter.toString().padStart(6, "0");

    return (
        <>
            <div className="d-flex justify-content-center mt-5 p-4 row">
                <button onClick={resetCounter} className="me-2 fw-bold col-12 col-lg-1">RESET</button>
                <Digit number={<i className="fa-solid fa-stopwatch"></i>} />
                {counterString.split("").map((digit, index) => (
                    <Digit key={index} number={digit} />
                ))}
                {isRunning === false ? (
                    <button onClick={startCounter} className="ms-2 fw-bold col-12 col-lg-1">START</button>
                ) : (
                    <button onClick={pauseCounter} className="ms-2 fw-bold col-12 col-lg-1">PAUSE</button>
                )}
            </div>
        </>
    );
};

export default SecondsCounter;



// PREVIOUS VERSION WITHOUT HOOKS OF A SIMPLE COUNTER WITHOUT BUTTONS
//
// const SecondsCounter = (props) => {
//     let digit = props.seconds
//     return (
//     <div className="d-flex justify-content-center mt-5 p-4"> 
//         <Digit number = {<i className="fa-solid fa-stopwatch"></i>}/>
//         <Digit number = {digit[0]}/>
//         <Digit number = {digit[1]}/>
//         <Digit number = {digit[2]}/>
//         <Digit number = {digit[3]}/>
//         <Digit number = {digit[4]}/>
//         <Digit number = {digit[5]}/>
//     </div>
//     )
// }

// export default SecondsCounter;