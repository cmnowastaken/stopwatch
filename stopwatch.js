let centiseconds = "00";
let seconds = "00";
let minutes = "00";

function startTime() {
  centiseconds++;
  if (centiseconds < 10) {
    centiseconds = "0" + centiseconds;
  }
  if (centiseconds == 99) {
    centiseconds = "00";
    seconds++;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }
  if (seconds == 60) {
    seconds = "00";
    minutes++;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  }
  document.getElementById("centiseconds").innerHTML = `${centiseconds}`;
  document.getElementById("seconds").innerHTML = `${seconds}`;
  document.getElementById("minutes").innerHTML = `${minutes}`;
}

function resetTime() {
  document.getElementById("centiseconds").innerHTML = centiseconds;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  centiseconds = "00";
  seconds = "00";
  minutes = "00";
}

document.getElementById("start").onclick = function () {
  IntervalID = setInterval(startTime, 10);
  console.log("click?");
};

document.getElementById("pause").onclick = function () {
  clearInterval(IntervalID);
};

document.getElementById("reset").onclick = function () {
  resetTime();
  clearInterval(IntervalID);
};
