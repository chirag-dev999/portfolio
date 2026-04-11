let isbloodymode = false;
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
  "you break it, you make it!"
];

function tip_loop() {
  return tips[Math.floor(Math.random() * tips.length)];
}

const button = document.getElementById("bloodybutton");
const gitlink = document.getElementById("gitlink");
const linkedinlink = document.getElementById("linkedinlink");
const projectlink1 = document.getElementById("projectlink1");
const counter = document.getElementById("counter");
const codetip = document.getElementById("codetip");

const newtext = document.createElement("p");
document.body.appendChild(newtext);

button.addEventListener("click", function () {
  isbloodymode = !isbloodymode;
  cnt++;
  if (isbloodymode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";
    gitlink.style.color = "orange";
    linkedinlink.style.color = "orange";
    projectlink1.style.color = "orange";
    button.innerText = "normal mode";
    button.style.height = "40px";
    button.style.backgroundColor = "rgb(0, 0, 0)";
    button.style.border = "solid";
    button.style.borderWidth = "2px";
    counter.innerText = "Toggle Counter: " + cnt;
    codetip.style.borderColor = "black";
    counter.style.borderColor = "black";
    codetip.style.color = "red";

    button.onmouseenter = function () {
      button.style.color = "white";
      button.style.borderColor = "rgb(255, 255, 255)";
    };
    codetip.onmouseenter = function () {
      codetip.style.color = "white";
    };
    codetip.onmouseleave = function () {
      codetip.style.color = "red";
    };
    button.onmouseleave = function () {
      button.style.color = "red";
      button.style.borderColor = "black";
    };
  } else {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "rgb(255,235,205)";
    gitlink.style.color = "rgb(255,213,168)";
    linkedinlink.style.color = "rgb(255,213,168)";
    projectlink1.style.color = "rgb(255,213,168)";
    button.style.border = "none";
    button.style.color = "white";
    button.innerText = "bloody dark mode";
    button.style.backgroundColor = "rgb(0, 0, 0)";
    button.style.borderWidth = "";
    button.style.borderStyle = "";
    counter.innerText = "Toggle Counter: " + cnt;
    codetip.style.borderColor = "rgb(130, 105, 85)";
    counter.style.borderColor = "rgb(130, 105, 85)";newtext.className = "tip-message";
    codetip.style.color = "blanchedalmond"; 

    button.onmouseenter = function () {
      button.style.color = "red";
      button.style.borderColor = "red";
    };
    button.onmouseleave = function () {
      button.style.color = "white";
      button.style.borderColor = "";
    };
  }
});

codetip.addEventListener("click", function() {
  newtext.innerText = tip_loop();
});
newtext.className = "tip-message";