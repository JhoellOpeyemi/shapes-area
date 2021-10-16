export function triangle() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
    <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="72.72px"
        height="72.719px"
        viewBox="0 0 72.72 72.719"
        style="enable-background: new 0 0 72.72 72.719"
        xml:space="preserve"
        class="shape-img"
        >
        <g>
            <g>
            <path
                d="M72.72,65.686H0L36.36,7.034L72.72,65.686z M5.388,62.686h61.943L36.36,12.727L5.388,62.686z"
            />
            </g>
        </g>
    </svg>`;

  // Create HTML elements to collect the required details
  getDetails.innerHTML = `
     <div class="input-group">
         <label for="base">Base: </label>
         <input type="number" id="base-input" />
     </div>
 
     <div class="input-group">
         <label for="height">Height: </label>
         <input type="number" id="height-input" />
     </div>
 
     <div class="btn-container">
        <button class="calculate-btn">Calculate</button>
     </div>`;

  // Select the calculate button and add a click event listener to calculate the area
  const calcBtn = document.querySelector(".calculate-btn");
  calcBtn.addEventListener("click", () => {
    // Get value of the various inputs
    const base = document.querySelector("#base-input").value;
    const height = document.querySelector("#height-input").value;

    const answer = (Number(base) * Number(height)) / 2;

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
