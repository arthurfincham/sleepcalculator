({
  "plugins": ["jsdom-quokka-plugin"]
})

// Ideal Hours
var idl_slider = document.getElementById("idl_myRange");
var idl_output = document.getElementById("idl_hrs");
idl_output.innerHTML = idl_slider.value;
idl_slider.oninput = function () {
  idl_output.innerHTML = this.value;
}
// Monday
var mon_slider = document.getElementById("m_myRange");
var mon_output = document.getElementById("m_hrs");
mon_output.innerHTML = mon_slider.value;
mon_slider.oninput = function () {
  mon_output.innerHTML = this.value;
}
// Tuesday
var tue_slider = document.getElementById("tue_myRange");
var tue_output = document.getElementById("tue_hrs");
tue_output.innerHTML = tue_slider.value;
tue_slider.oninput = function () {
  tue_output.innerHTML = this.value;
}
// Wednesday
var wed_slider = document.getElementById("wed_myRange");
var wed_output = document.getElementById("wed_hrs");
wed_output.innerHTML = wed_slider.value;
wed_slider.oninput = function () {
  wed_output.innerHTML = this.value;
}
// Thursday
var thu_slider = document.getElementById("thu_myRange");
var thu_output = document.getElementById("thu_hrs");
thu_output.innerHTML = thu_slider.value;
thu_slider.oninput = function () {
  thu_output.innerHTML = this.value;
}
// Friday
var fri_slider = document.getElementById("fri_myRange");
var fri_output = document.getElementById("fri_hrs");
fri_output.innerHTML = fri_slider.value;
fri_slider.oninput = function () {
  fri_output.innerHTML = this.value;
}
// Saturday
var sat_slider = document.getElementById("sat_myRange");
var sat_output = document.getElementById("sat_hrs");
sat_output.innerHTML = sat_slider.value;
sat_slider.oninput = function () {
  sat_output.innerHTML = this.value;
}
// Sunday
var sun_slider = document.getElementById("sun_myRange");
var sun_output = document.getElementById("sun_hrs");
sun_output.innerHTML = sun_slider.value;
sun_slider.oninput = function () {
  sun_output.innerHTML = this.value;
}
// Calculator Script
function myFunction() {

  var idealHours = +(idl_slider.value) * 7
  
  var totalSleep = +(mon_slider.value) + +(tue_slider.value) + +(wed_slider.value) + +(thu_slider.value) + +(
    fri_slider.value) + +(sat_slider.value) + +(sun_slider.value)

  var averageSleep = (totalSleep / 7).toFixed(1)

  var diffSleep = (+(idl_slider.value) - averageSleep).toFixed(1)

  if (idealHours === totalSleep) {
    document.getElementById("p1").innerHTML = "Perfect! You averaged " +
      idl_slider.value + " hours each night.";
  } else if (idealHours > totalSleep) {
    document.getElementById("p1").innerHTML = "Get some rest! You averaged " + averageSleep +
      " hours per night. This is " + diffSleep + " hours less than planned per night.";
  } else if (idealHours < totalSleep) {
    document.getElementById("p1").innerHTML = "Don't sleep too much! You averaged " + averageSleep +
      " hours per night. This is " + (diffSleep * -1) + " hours more than planned per night.";
  }
}