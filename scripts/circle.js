export function circle() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
  <svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="shape-img"><path fill="#000" d="M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05zm0 17.9c118.9 0 215.1 96.15 215.1 215.05S374.9 471.1 256 471.1c-118.9 0-215.05-96.2-215.05-215.1C40.95 137.1 137.1 40.95 256 40.95z"/></svg>`;

  // Create HTML elements to collect the required details
  getDetails.innerHTML = `
     <div class="input-group">
         <label for="base">Radius: </label>
         <input type="number" id="radius-input" />
     </div>
 
     <div class="btn-container">
        <button class="calculate-btn">Calculate</button>
     </div>`;

  // Select the calculate button and add a click event listener to calculate the area
  const calcBtn = document.querySelector(".calculate-btn");
  calcBtn.addEventListener("click", () => {
    // Get value of the various inputs
    const radius = document.querySelector("#radius-input").value;
    const answer = (Math.PI * radius ** 2).toFixed(2);

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
