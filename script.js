let theSlider = document.getElementById("slider"); // initialize slider
document.getElementById("value").innerText = theSlider.value; //update value shown in HTML

let container = document.getElementById("container");
let containerQuery = document.querySelector("#container");

// function to remove divs to reset the grid
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//function to generate RGB
let random_bg_color = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};

// this removes all previous child nodes as to not cause overload
//fixed overlapping divs error !!!!!! :D
function gridMaker() {
  if (container.firstChild) {
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
    createDiv.style.background = "white";

    createDiv.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(0, 0, 0, 1)";
    });
  }

  // adds a shake effect to clear grid like the toy
  container.classList.add("animate__animated", "animate__shakeX");
  // after shake is done animating, remove shake so you can apply it again with each grid reset
  container.addEventListener("animationend", () => {
    container.classList.remove("animate__shakeX");
  });
}

//changes color to random RGB when hovering
let rainbow = () => {
  let children = container.childNodes; // creates an array of all "cell" boxes within the grid container
  for (i = 0; i < children.length; i++) {
    let tableChild = children[i]; // go through each cell
    tableChild.addEventListener("mouseenter", function () {
      this.style.backgroundColor = random_bg_color();
    });
  }
};

// function used for pickr to change color to specified value
let rgbSelector = (input) => {
  let color = input;
  let children = container.childNodes;
  for (i = 0; i < children.length; i++) {
    var tableChild = children[i];
    tableChild.addEventListener("mouseenter", function () {
      this.style.backgroundColor = color;
    });
  }
};

let opacityHover = () => {
  let children = container.childNodes;
  for (i = 0; i < children.length; i++) {
    var tableChild = children[i];
    // set an opacity value so you can change in eventlistener
    tableChild.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgba(1,1,1,0.3)".replace(
        /[^,]+(?=\))/,
        "0.5"
      );
    });
  }
};

//PICKR STUFF BELOW HERE

const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      input: true,
    },
  },
});

pickr.on("change", (color, instance) => {
  const rgbaColor = color.toRGBA().toString();
  rgbSelector(rgbaColor);
});

window.addEventListener("DOMContentLoaded", (event) => {
  gridMaker();
});
