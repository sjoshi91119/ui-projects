// Create and append the container
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// Create and append the form inside the container
let form = document.createElement("form");
form.id = "calculator";
container.appendChild(form);

// Create and append the first input element inside the form
let inputFirst = document.createElement("input");
inputFirst.setAttribute("type", "number");
inputFirst.id = "first"; // Set the id attribute to "first"
form.appendChild(inputFirst);

// Create and append the dropdown (select) element inside the form
let dropdown = document.createElement("select");
dropdown.id = "operators";
dropdown.innerHTML =
  '<option value="+">+</option><option value="-">-</option><option value="*">*</option><option value="/">/</option>';
form.appendChild(dropdown);

// Create and append the second input element inside the form
let inputSecond = document.createElement("input");
inputSecond.setAttribute("type", "number");
inputSecond.id = "second"; // Set the id attribute to "second"
form.appendChild(inputSecond);

// Create the button
const button = document.createElement("button");
button.textContent = "Solve"; // Set the text content of the button
form.appendChild(button);

// Create and append the answer element
let answer = document.createElement("h1");
form.appendChild(answer);

// Add event listener to the button
button.addEventListener("click", solve);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  solve(); // Call the solve function
});

// Define the solve function
function solve() {
  // Get the input values and the operator
  const inputFirst = parseFloat(document.getElementById("first").value);
  const inputSecond = parseFloat(document.getElementById("second").value);
  const operator = document.getElementById("operators").value;

  // Check if the input values are valid numbers
  if (isNaN(inputFirst) || isNaN(inputSecond)) {
    alert("Please enter valid numbers for both inputs.");
    return;
  }

  // Perform the calculation based on the operator
  let solution;
  switch (operator) {
    case "+":
      solution = inputFirst + inputSecond;
      break;
    case "-":
      solution = inputFirst - inputSecond;
      break;
    case "*":
      solution = inputFirst * inputSecond;
      break;
    case "/":
      solution = inputFirst / inputSecond;
      break;
    default:
      alert("Invalid operator selected.");
      return;
  }

  // Display the solution
  answer.innerText = " = " + solution;
}
