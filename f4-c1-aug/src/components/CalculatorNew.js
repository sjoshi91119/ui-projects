import React, { useState } from "react";

const CalculatorNew = () => {
  const [fnumb, setFnumb] = useState("");
  const [snumb, setSnumb] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("black");
  //shubham Joshi
  const handleOperatorClick = (operator) => {
    setOp(operator);
    setStatusMessage("");
    setResult(""); // Reset the result when an operator is clicked
    setStatusColor("black"); // Reset the status color

    // Check if both input fields have values
    if (fnumb !== "" && snumb !== "") {
      setResult(solution(operator));
      setStatusMessage("Success!");
      setStatusColor("blue"); // Set status color to blue for success message [sjoshi91119]
    } else {
      setStatusMessage("Error!");
      setStatusColor("red"); // Set status color to red for error message
    }
  };

  const solution = (operator) => {
    const num1 = parseFloat(fnumb);
    const num2 = parseFloat(snumb);

    switch (operator) {
      case "add":
        return num1 + num2;
      case "sub":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="num 1"
        value={fnumb}
        onChange={(e) => setFnumb(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="num 2"
        value={snumb}
        onChange={(e) => setSnumb(e.target.value)}
      />
      <br />
      <div className="operator-list">
        <button className="operator" onClick={() => handleOperatorClick("add")}>
          +
        </button>
        <button className="operator" onClick={() => handleOperatorClick("sub")}>
          -
        </button>
        <button
          className="operator"
          onClick={() => handleOperatorClick("multiply")}
        >
          *
        </button>
        <button
          className="operator"
          onClick={() => handleOperatorClick("divide")}
        >
          /
        </button>
      </div>
      <p className="status" style={{ color: statusColor }}>
        {statusMessage}
      </p>
      <p className="status-desc">
        {result !== "" ? `Result: ${result}` : ""}
        {statusMessage === "Error!" && fnumb === ""
          ? "num1 cannot be empty"
          : ""}{" "}
        <br />
        {statusMessage === "Error!" && snumb === ""
          ? "num2 cannot be empty"
          : ""}
      </p>
    </div>
  );
};

export default CalculatorNew;

//{[shubham joshi]}
