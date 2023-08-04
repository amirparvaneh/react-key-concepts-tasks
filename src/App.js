import { useState } from 'react';

import Calculation from './components/Calculation';
import React from 'react';
import Result from './components/Result';



function App() {

  const [enteredNumber, setEnteredNumber] = useState({ first: 0, second: 0 });
  const [chosenOperation, setChosenOperation] = useState('add');

  function changeFirstNumberHandler(event) {
    setEnteredNumber((pervNumbers) => ({
      first: +event.target.value,
      second: pervNumbers.second,
    }));
  }


  function changeSeconNumberHandler(event) {
    setEnteredNumber((pervNumbers) => ({
      first: pervNumbers.first,
      second: +event.target.value,
    }));
  }


  function updateOperationHandler(event) {
    setChosenOperation(event.target.value);
  }


  let result;

  if (chosenOperation === 'add') {
    result = enteredNumber.first + enteredNumber.second;
  } else if (chosenOperation === 'subtract') {
    result = enteredNumber.first - enteredNumber.second;
  } else if (chosenOperation === 'multiply') {
    result = enteredNumber.first * enteredNumber.second;
  } else {
    result = enteredNumber.first / enteredNumber.second;
  }

  return (
    <p>
      <Calculation
        onFirstNumberChange={changeFirstNumberHandler}
        onSecondNumberChange={changeSeconNumberHandler}
        onOperationChange={updateOperationHandler}
      />
      <Result calculationResult={result}/>
    </p>
  );
}

export default App;
