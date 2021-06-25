import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import GalacticAges from "./js/galactic-calc.js";

$(document).ready(function () {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const year = today.getFullYear();
  if (month < 10) {
    month = "0" + month.toString();
  }
  if (day < 10) {
    day = "0" + day.toString();
  }
  let maxDate = year + "-" + month + "-" + day;
  $("#born").attr("max", maxDate);

  $("form#enterDOB").submit(function (event) {
    event.preventDefault();
    const dateOfBirth = $("#born").val();
    const splitDateOfBirth = dateOfBirth.split("-");
    const parsedDateOfBirth = splitDateOfBirth.map((x) => parseInt(x));
    let inputtedDOB = new GalacticAges(
      parsedDateOfBirth[0],
      parsedDateOfBirth[1],
      parsedDateOfBirth[2]
    );

    inputtedDOB.dateOfBirthCalc();
    inputtedDOB.galacticAgeCalc();
    inputtedDOB.lifeExpectancy();

    $("#mercury-years").html(inputtedDOB.mercuryAge);
    $("#venus-years").html(inputtedDOB.venusAge);
    $("#earth-years").html(inputtedDOB.earthAge);
    $("#mars-years").html(inputtedDOB.marsAge);
    $("#jupiter-years").html(inputtedDOB.jupiterAge);
    $("#under-mercury-expectancy").html(inputtedDOB.mercuryExpectancy);
    $("#under-venus-expectancy").html(inputtedDOB.mercuryExpectancy);
    $("#under-earth-expectancy").html(inputtedDOB.earthExpectancy);
    $("#under-mars-expectancy").html(inputtedDOB.marsExpectancy);
    $("#under-jupiter-expectancy").html(inputtedDOB.jupiterExpectancy);
    $("#over-mercury-expectancy").html(inputtedDOB.mercuryExpectancy);
    $("#over-venus-expectancy").html(inputtedDOB.mercuryExpectancy);
    $("#over-earth-expectancy").html(inputtedDOB.earthExpectancy);
    $("#over-mars-expectancy").html(inputtedDOB.marsExpectancy);
    $("#over-jupiter-expectancy").html(inputtedDOB.jupiterExpectancy);

    const under72 = () => {
      $("ul").show();
      $("#years-old").fadeIn();
      $("#under-expectancy").fadeIn();
      $("#over-expectancy").hide();
    }
    const over72 = () => {
      $("ul").show();
      $("#years-old").fadeIn();
      $("#under-expectancy").hide();
      $("#over-expectancy").fadeIn();
    }

    if (inputtedDOB.earthAge <= 72) {
      if (parsedDateOfBirth[1] == month && parsedDateOfBirth[2] == day){
      alert("HAPPY EARTH-BIRTHDAY!")
      under72();
      } else {
      under72();
      }
    } else if (isNaN(inputtedDOB.earthAge)) {
      alert("Please enter the day you were born, creature!");
    } else {
      if (parsedDateOfBirth[1] == month && parsedDateOfBirth[2] == day) {
        alert("HAPPY EARTH-BIRTHDAY!")
        over72();
    } else {
        over72();
    }
  }
  $("input#reset").click(function () {
    $("ul").hide();
  });
  })
});