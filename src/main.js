import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import GalacticAges from './js/galactic-calc.js'



$(document).ready(function() {
  const today = new Date();
    
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const year = today.getFullYear();
  if (month < 10){
        month = '0' + month.toString();
      }
  if (day < 10) {
        day = '0' + day.toString();
      }
  let maxDate = year + '-' + month + '-' + day;
  $('#born').attr('max', maxDate);

  $("form#enterDOB").submit(function(event) {
    event.preventDefault();
    const dateOfBirth = $('#born').val();
    const splitDateOfBirth = dateOfBirth.split("-");
    const parsedDateOfBirth = splitDateOfBirth.map(x => parseInt(x));
    let inputtedDOB = new GalacticAges(parsedDateOfBirth[0], parsedDateOfBirth[1], parsedDateOfBirth[2])

    inputtedDOB.dateOfBirthCalc();
    inputtedDOB.galacticAgeCalc();
    inputtedDOB.lifeExpectancy();

    console.log(inputtedDOB);
  
  })
});