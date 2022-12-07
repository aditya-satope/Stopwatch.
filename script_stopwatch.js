"use strict";
let start;
let process = false;
let [hr, sec, min] = [0, 0, 0];
function incrementTime() {
  if (process === true) {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hr++;
    }

    if (sec < 10 && sec.toString().length == 1) {
      sec = "0" + sec;
    }
    if (min < 10 && min.toString().length == 1) {
      min = "0" + min;
    }
    if (hr < 10 && hr.toString().length == 1) {
      hr = "0" + hr;
    }

    if (hr === 0 && min === 0 && sec === 0) {
      console.log("This happened");
      document.querySelector("#time").textContent = `00:00:00`;
    } else {
      document.querySelector("#time").textContent = `${hr}:${min}:${sec}`;
    }
  }
}
function countTime() {
  if (process === false) {
    process = true;
    setInterval(incrementTime, 999);
  }
}
document.querySelector("#start").addEventListener("click", () => {
  console.log("started");
  countTime();
});
document.querySelector("#stop").addEventListener("click", () => {
  process = false;
  console.log(process);
});
document.querySelector("#reset").addEventListener("click", () => {
  process = false;
  [hr, sec, min] = [0, 0, 0];
  document.querySelector("#time").textContent = `00:00:00`;
});
