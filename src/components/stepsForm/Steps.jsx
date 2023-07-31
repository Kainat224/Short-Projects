import React, { useState } from "react";
import "./steps.css";

const message = ["Learn React 🤩", "Apply for Job 😎", "Get Money 🤑"];

const Steps = () => {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Evolutionary Mindz" });
  const [isOpen, setIsOpen] = useState(true);

  // const step = 1;
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
    // setTest({ name: "Innovative Coderz" });
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {message[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            {/* <button
           style={{ backgroundColor: "#7950f2", color: "#fff" }}
           onClick={() => alert("Previous")}
           onMouseEnter={() => alert("Mouse")}
         >
           Previous
         </button> */}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
