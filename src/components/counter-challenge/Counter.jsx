import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  function handleReset() {
    setStep(1);
    setCounter(0);
  }

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
      <h1>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </h1>
      {/* <div className="stepBtnStyle">
        <button onClick={incrementS}>+</button>

        <button onClick={decrementS}>-</button>
      </div> */}
      <div className="stepBtnStyle">
        <button onClick={incrementCount}>+</button>
        {/* <h1> Counter: {counter} </h1> */}
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={decrementCount}>-</button>
      </div>
      <h1 className="textStyle">
        <span>
          {counter === 0 ? "Today is " : `${counter} Days from Today is `}
        </span>
        <span>{date.toDateString()}</span>
      </h1>
      {counter !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
};

export default Counter;
