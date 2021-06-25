export default class GalacticAges {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.earthAge = "";
    this.mercuryAge = "";
    this.venusAge = "";
    this.marsAge = "";
    this.jupiterAge = "";
    this.mercuryUnit = 0.24;
    this.venusUnit = 0.62;
    this.marsUnit = 1.88;
    this.jupiterUnit = 11.86;
  }

  dateOfBirthCalc() {
    const today = new Date();
    let ageYear = today.getFullYear() - this.year;
    const ageMonth = today.getMonth() - this.month;
    if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < this.day)) {
      ageYear--;
    }
    this.earthAge = ageYear;
  }

  galacticAgeCalc() {
    this.mercuryAge = Math.floor(this.earthAge * this.mercuryUnit);
    this.venusAge = Math.floor(this.earthAge * this.venusUnit);
    this.marsAge = Math.floor(this.earthAge * this.marsUnit);
    this.jupiterAge = Math.floor(this.earthAge * this.jupiterUnit);
  }
}


  // lifeExpectancy() {
  //   const averageExpectancy = 72;

  // }