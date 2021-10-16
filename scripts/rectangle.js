export function rectangle() {
  const imgContainer = document.querySelector(".shape-img-container");
  const getDetails = document.querySelector(".get-details");
  const result = document.querySelector(".result");

  // Set Shape Image
  imgContainer.innerHTML = `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="shape-img">
<g>
	<g>
		<path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667v298.667C0,411.221,4.779,416,10.667,416h490.667
			c5.888,0,10.667-4.779,10.667-10.667V106.667C512,100.779,507.221,96,501.333,96z M490.667,394.667H21.333V117.333h469.333
			V394.667z"/>
	</g>
</g>

</svg>`;

  // Create HTML elements to collect the required details
  getDetails.innerHTML = `
       <div class="input-group">
           <label for="base">Length: </label>
           <input type="number" id="length-input" />
       </div>

       <div class="input-group">
           <label for="base">Breadth: </label>
           <input type="number" id="breadth-input" />
       </div>
   
       <div class="btn-container">
          <button class="calculate-btn">Calculate</button>
       </div>`;

  // Select the calculate button and add a click event listener to calculate the area
  const calcBtn = document.querySelector(".calculate-btn");
  calcBtn.addEventListener("click", () => {
    // Get value of the various inputs
    const length = document.querySelector("#length-input").value;
    const breadth = document.querySelector("#breadth-input").value;
    const answer = Number(length) * Number(breadth);

    // Display the result to the user
    result.textContent = `Area = ${answer}`;
  });
}
