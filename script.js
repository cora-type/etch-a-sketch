let theSlider = document.getElementById("slider"); // initialize slider
document.getElementById("value").innerText = theSlider.value; //update value shown in HTML

function gridMaker() {
  document.getElementById("value").innerText = theSlider.value; //update value shown in HTML
  let sliderValue = theSlider.value;

  let squared = sliderValue * sliderValue;

  document.documentElement.style.setProperty("--columns-row", sliderValue);

  for (i = 0; i < squared; i++) {
    var createDiv = document.createElement("div");
    createDiv.classList.add("cell"); // add class name
    document.getElementById("container").appendChild(createDiv); // attach cells under container
    createDiv.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "red";
    });
  }
}
