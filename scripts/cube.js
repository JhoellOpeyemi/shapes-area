export function cube() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 490.452 490.452" style="enable-background:new 0 0 490.452 490.452;" xml:space="preserve" class="shape-img">
    <path d="M245.226,0L43.836,126.814v236.823l201.39,126.814l201.39-126.814V126.814L245.226,0z M403.465,135.095l-158.239,99.643
   L86.987,135.095l158.239-99.643L403.465,135.095z M73.836,162.267l156.39,98.477v184.81l-156.39-98.478V162.267z M260.226,445.555
   v-184.81l156.39-98.478v184.81L260.226,445.555z"/>

    </svg>`;

  // Create HTML elements to collect the required details
  getDetails.innerHTML = `
           <div class="input-group">
               <label for="base">Length: </label>
               <input type="number" id="length-input" />
           </div>
       
           <div class="btn-container">
              <button class="calculate-btn">Calculate</button>
           </div>`;

  // Select the calculate button and add a click event listener to calculate the area
  const calcBtn = document.querySelector(".calculate-btn");
  calcBtn.addEventListener("click", () => {
    // Get value of the various inputs
    const length = document.querySelector("#length-input").value;
    const answer = 6 * Number(length) ** 2;

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
