import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAges from './js/galactic-calc.js'

$(document).ready(function() {
  $("form#enterDOB").submit(function(event) {
    let dateOfBirth = $("#born").val();
    splitDateOfBirth = dateOfBirth.split("-");
    const parsedDateOfBirth = splitDateOfBirth.map(x => x);
    let calculatedAge = new GalacticAges()
  
  })

  console.log(GalacticAges);
  console.log(dob);
});