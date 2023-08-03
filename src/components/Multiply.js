import { useState } from "react";


function Multiply() {

    const[enteredNumbers,setEnteredNumbers] =  useState({first : 0,second : 0});

    function changeFirstNumber(event) {
        setEnteredNumbers((pervNumbers) => ({
            first : +event.target.value,
            second : pervNumbers.second,
        }));
    }

    function changeSecondNumber(event) {
        setEnteredNumbers((pervNumbers) => ({
            first : pervNumbers.first,
            second : +event.target.second,
        }));
    }

    const result = enteredNumbers.first * enteredNumbers.second ; 


    return( 
        <p>
            <input type="number" onChange={changeFirstNumber}/> * {` `}
            <input type="number" onChange={changeSecondNumber}/> {result}
        </p>
    )
}

export default Multiply;