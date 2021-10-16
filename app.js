import { triangle } from "./scripts/triangle.js";
import { circle } from "./scripts/circle.js";
import { rectangle } from "./scripts/rectangle.js";
import { square } from "./scripts/square.js";
import { parallelogram } from "./scripts/parallelogram.js";
import { cube } from "./scripts/cube.js";

const selectShapes = document.querySelector("select");
const result = document.querySelector(".result");

selectShapes.addEventListener("change", (e) => {
  result.textContent = "Area = ";

  // If the option clicked is Triangle
  if (e.target.value === "triangle") {
    triangle();
  }

  // If the option clicked is Circle
  else if (e.target.value === "circle") {
    circle();
  }

  // If the option clicked is Rectangle
  else if (e.target.value === "rectangle") {
    rectangle();
  }

  // If the option clicked is Square
  else if (e.target.value === "square") {
    square();
  }

  // If the option clicked is Parallelogram
  else if (e.target.value === "parallelogram") {
    parallelogram();
  }

  // If the option clicked is Cube
  else if (e.target.value === "cube") {
    cube();
  } else {
    const imgContainer = document.querySelector(".shape-img-container");
    const getDetails = document.querySelector(".get-details");
    const result = document.querySelector(".result");

    imgContainer.innerHTML = "";
    getDetails.innerHTML = "";
    result.innerHTML = "";
  }
});
