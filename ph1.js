let isbloodymode=false;
let cnt=0;

const button = document.getElementById("bloodybutton");
const gitlink = document.getElementById("gitlink");
const linkedinlink = document.getElementById("linkedinlink");
const projectlink1 = document.getElementById("projectlink1");
const counter=document.getElementById("counter");

button.addEventListener("click", function () {
  isbloodymode=!isbloodymode;
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
    button.style.borderWidth="2px";
    counter.innerText="Toggle Counter: "+ cnt;

    

    button.onmouseenter = function () {
      button.style.color = "white";
      button.style.borderColor="rgb(255, 255, 255)";
    };
    button.onmouseleave = function () {
      button.style.color = "red";
      button.style.borderColor="black";
      
    };
  } else if (isbloodymode===false) {
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
    counter.innerText="Toggle Counter: "+ cnt;  

    button.onmouseenter = function () {
      button.style.color = "red";
      button.style.borderColor="red";
    };
    button.onmouseleave = function () {
       button.style.color = "white";
       button.style.borderColor = ""; 
    };
  }
});
