let isdarkmode = false;
let cnt = 0;
let tips = [
  "closing tabs is faster than reloading",
  "Use AI whenever you feel stuck",
  "dont be afraid of mistakes",
  "document your code",
  "consistency is the key",
  "take action instead of falling into tutorial hell",
  "keep learning new things even if it is out of your career's scope",
  "visualise the idea before writing code",
  "take breaks, coding is hard",
  "break things",
  "you break it, you make it!",
];

function tip_loop() {
  return tips[Math.floor(Math.random() * tips.length)];
}

const button = document.getElementById("darkbutton");

const gitlink = document.getElementById("gitlink");

const linkedinlink = document.getElementById("linkedinlink");

const projectlink1 = document.getElementById("projectlink1");

const counter = document.getElementById("counter");

const codetip = document.getElementById("codetip");

// Create the tip message element dynamically
let newtext = document.createElement("div");
newtext.className = "tip-message";
newtext.style.display = "none"; // Hide initially
document.body.appendChild(newtext);

button.addEventListener("click", function () {
  cnt++;
  document.body.classList.toggle("dark-mode");
  counter.innerText = "Toggle Counter: " + cnt;

  // Change button text based on whether dark-mode class exists
  if (document.body.classList.contains("dark-mode")) {
    button.innerText = "normal mode";
    button.style.backgroundColor = "#2a2a2a";
    button.style.color = "white";
    button.onmouseenter = function () {
      button.style.backgroundColor = "black";
      button.style.fontSize="13.7px"
    };
    button.onmouseleave = function () {
      button.style.backgroundColor = "";
      button.style.fontSize=""
    };
    // ... minimal button-specific styles that don't belong in CSS
  } else {
    button.innerText = "normal mode";
    button.style.backgroundColor = "#ffe5ae";
    button.style.color = "black";
    button.onmouseenter = function () {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    };
    button.onmouseleave = function () {
      button.style.backgroundColor = "";
    };
  }
});
codetip.addEventListener("click", function () {
  newtext.innerText = tip_loop();
  newtext.style.display = "block"; // Show the tip

  // Optional: Auto-hide after 3 seconds
  setTimeout(function () {
    newtext.style.display = "none";
  }, 3000);
});
