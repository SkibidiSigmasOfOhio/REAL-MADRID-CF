// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
function clickStadium() {
  document.getElementById("logo").src = "images/stadium.jpeg";
}

function clickTrophies() {
  document.getElementById("logo").src = "images/trophy.jpg";
  const sound = document.getElementById("champions");
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
    sound.currentTime = 0; // Reset the audio to the beginning if desired
  }
}

function clickLegends() {
  document.getElementById("logo").src = "images/ronny.gif";
  const sound = document.getElementById("siu");
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
    sound.currentTime = 0; // Reset the audio to the beginning if desired
  }
}

function clickHighlights() {
  document.getElementById("logo").src = "images/highlights.gif";
}
function clickTitle() {
  const sound = document.getElementById("sound");
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
    sound.currentTime = 0; // Reset the audio to the beginning if desired
  }
}
