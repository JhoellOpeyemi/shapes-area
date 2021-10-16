export function square() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" class="shape-img square">
        <path d="M0,0v60h60V0H0z M58,58H2V2h56V58z"/>

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
    const answer = Number(length) ** 2;

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
