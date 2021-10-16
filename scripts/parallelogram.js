export function parallelogram() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
    <svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="shape-img parallelogram">
    <path d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z" stroke="black" stroke-width="2"/>
    </svg>
  `;

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

    const answer = Number(base) * Number(height);

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
