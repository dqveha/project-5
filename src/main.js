import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAges from './js/galactic-calc.js'

$(document).ready(function() {
  $("form#enterDOB").submit(function(event) {
    event.preventDefault();
    const dateOfBirth = $("#born").val();
    const splitDateOfBirth = dateOfBirth.split("-");
    const parsedDateOfBirth = splitDateOfBirth.map(x => parseInt(x));
    let calculatedAge = new GalacticAges(parsedDateOfBirth[0], parsedDateOfBirth[1], parsedDateOfBirth[2])

    console.log(calculatedAge);
  
  })

  console.log(GalacticAges);
});