// Generate a random integer between min and max
const randomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

// Geometry functions
const squareArea = (side) => side * side;
const rectangleArea = (length, width) => length * width;
const circleArea = (radius) => Math.PI * radius * radius;
const triangleArea = (a, b, c) => {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
const pentagonPerimeter = (side) => 5 * side;
const octagonPerimeter = (side) => 8 * side;

// Event handlers
document.getElementById("button1").onclick = () => {
  const side = randomNumber(2, 10);
  const answer = prompt(`What is the area of a square with side ${side}?`);
  const correctAnswer = squareArea(side);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};

document.getElementById("button2").onclick = () => {
  const length = randomNumber(2, 10);
  const width = randomNumber(2, 10);
  const answer = prompt(
    `What is the area of a rectangle with length ${length} and width ${width}?`
  );
  const correctAnswer = rectangleArea(length, width);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};

document.getElementById("button3").onclick = () => {
  const radius = randomNumber(2, 10);
  const answer = prompt(
    `What is the area of a circle with radius ${radius}? (Use π ≈ 3.14)`
  );
  const correctAnswer = circleArea(radius).toFixed(2);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};

document.getElementById("button4").onclick = () => {
  const a = randomNumber(3, 10);
  const b = randomNumber(3, 10);
  const c = randomNumber(3, 10);
  const answer = prompt(
    `What is the area of a triangle with sides ${a}, ${b}, and ${c}? (Rounded to 2 decimal places)`
  );
  const correctAnswer = triangleArea(a, b, c).toFixed(2);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};

document.getElementById("button5").onclick = () => {
  const side = randomNumber(2, 10);
  const answer = prompt(
    `What is the perimeter of a pentagon with side ${side}?`
  );
  const correctAnswer = pentagonPerimeter(side);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};

document.getElementById("button6").onclick = () => {
  const side = randomNumber(2, 10);
  const answer = prompt(
    `What is the perimeter of an octagon with side ${side}?`
  );
  const correctAnswer = octagonPerimeter(side);
  alert(
    answer == correctAnswer
      ? "Correct!"
      : `Wrong! The answer is ${correctAnswer}.`
  );
};
