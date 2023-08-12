import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [fnumb, setFnumb] = useState("");
  const [snumb, setSnumb] = useState("");
  const [op, setOp] = useState("");
  const [status, setStatus] = useState("");
  const [statusdesc, setStatusdesc] = useState("");

  if (fnumb !== "" && snumb !== "") {
    solution();
  } else if (fnumb == "" && snumb !== "") {
    document.querySelector("status").innerText = "Num1 cannot be empty";
  } else {
    document.querySelector("status").innerText = "Num2 cannot be empty.";
  }

  function handleOp(operator) {
    setOp = operator;
  }
  const solution = () => {
    switch (op) {
      case "add":
        return parseFloat(fnumb) + parseFloat(snumb);
      case "sub":
        return parseFloat(fnumb) - parseFloat(snumb);
      case "multiply":
        return parseFloat(fnumb) * parseFloat(snumb);
      case "divide":
        return parseFloat(fnumb) / parseFloat(snumb);
      default:
        return "";
    }
  };
  return (
    <>
      <div className="container">
        <h1>React Calculator</h1>
        <input
          type="text"
          placeholder="num 1"
          value={fnumb}
          onChange={(e) => setFnumb(e.target.value)}
        ></input>
        <br />
        <input
          type="text"
          placeholder="num 2"
          value={snumb}
          onChange={(e) => setSnumb(e.target.value)}
        ></input>
        <br />
        <div className="operator-list">
          <button
            className="operator"
            onClick={() => {
              handleOp("add");
            }}
          >
            +
          </button>
          <button
            className="operator"
            onClick={() => {
              handleOp("sub");
            }}
          >
            -
          </button>
          <button
            className="operator"
            onClick={() => {
              handleOp("multipy");
            }}
          >
            *
          </button>
          <button
            className="operator"
            onClick={() => {
              handleOp("divide");
            }}
          >
            /
          </button>
        </div>
        <p className="status"></p>

        <p className="status-desc"></p>
      </div>
    </>
  );
};
export default Calculator;
