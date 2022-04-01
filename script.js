let theSlider = document.getElementById("slider"); // initialize slider
document.getElementById("value").innerText = theSlider.value; //update value shown in HTML

let container = document.getElementById("container");
let containerQuery = document.querySelector("#container");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function gridMaker() {
  if (container.firstChild) {
    //fixed overlapping divs error !!!!!! :D
    removeAllChildNodes(containerQuery);
  }

  document.getElementById("value").innerText = theSlider.value; //update value shown in HTML
  let sliderValue = theSlider.value;

  let squared = sliderValue * sliderValue; // # of boxes in the grid

  document.documentElement.style.setProperty("--columns-row", sliderValue); // columns and rows based on slider input

  for (i = 0; i < squared; i++) {
    var createDiv = document.createElement("div");
    createDiv.classList.add("cell"); // add class name
    container.appendChild(createDiv); // attach cells under container
    // createDiv.addEventListener("mouseenter", function () {
    //   this.style.backgroundColor = "red";
    // });
  }
}

const selectElement = document.querySelector("#slider");
selectElement.addEventListener("change", gridMaker);
