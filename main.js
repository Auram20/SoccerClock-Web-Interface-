let intervalId;
let minutes = 0;
let seconds = 0;
const maxMinutes = 90;
const stopMinutes = 45;

function fillTime() {
  clearInterval(intervalId);
  intervalId = null;

  document.getElementById("minutes").value = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").value = seconds.toString().padStart(2, "0");

  intervalId = setInterval(function() {
    if (++seconds === 60) {
      seconds = 0;
      if (++minutes >= stopMinutes || minutes >= maxMinutes) {
        clearInterval(intervalId);
      }
    }
    document.getElementById("seconds").value = seconds.toString().padStart(2, "0");
    document.getElementById("minutes").value = minutes.toString().padStart(2, "0");
  }, 1000);
}


  
document.getElementById("startFhalf").addEventListener("click", function() {
    minutes = 0;
    seconds = 0;
    fillTime();
});

document.getElementById("startShalf").addEventListener("click", function() {
  
    minutes = 45;
    seconds = 0;
    fillTime();
});

document.getElementById("pause").addEventListener("click", function() {
  clearInterval(intervalId);
});

document.getElementById("continue").addEventListener("click", function() {
    fillTime();
  });

  document.getElementById("reset-clock").addEventListener("click", function() {
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
  });

  document.getElementById("manualReset").addEventListener("click", function() {
    console.log("manual reset")
    clearInterval(intervalId);
    minutes = parseInt(document.getElementById("manualMinutes").value, 10);
    seconds = parseInt(document.getElementById("manualSeconds").value, 10);
    fillTime();
  });