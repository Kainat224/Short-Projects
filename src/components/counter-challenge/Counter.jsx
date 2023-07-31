import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const date = new Date("10 June 2025");
  date.setDate(date.getDate() + counter);

  function incrementS() {
    setStep((s) => s + 1);
  }

  function decrementS() {
    setStep((s) => s - 1);
  }

  function incrementCount() {
    setCounter((c) => c + step);
  }

  function decrementCount() {
    setCounter((c) => c - step);
  }

  return (
    <>
      <div className="stepBtnStyle">
        <button onClick={incrementS}>+</button>
        <h1> Step: {step} </h1>
        <button onClick={decrementS}>-</button>
      </div>
      <div className="stepBtnStyle">
        <button onClick={incrementCount}>+</button>
        <h1> Counter: {counter} </h1>
        <button onClick={decrementCount}>-</button>
      </div>
      <h1 className="textStyle">
        <span>
          {counter === 0 ? "Today is " : `${counter} Days from Today is `}
        </span>
        <span>{date.toDateString()}</span>
      </h1>
    </>
  );
};

export default Counter;
