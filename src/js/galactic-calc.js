export default class GalacticAges {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.earthAge = "";
    this.earthExpectancy = "";
    this.mercuryAge = "";
    this.mercuryExpectancy = "";
    this.venusAge = "";
    this.venusExpectancy = "";
    this.marsAge = "";
    this.marsExpectancy = "";
    this.jupiterAge = "";
    this.jupiterExpectancy = "";
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

  lifeExpectancy() {
    const averageExpectancy = 72;
    this.earthExpectancy = (averageExpectancy - this.earthAge);
    this.mercuryExpectancy = Math.floor((averageExpectancy * this.mercuryUnit) - this.mercuryAge);
    this.venusExpectancy = Math.floor((averageExpectancy * this.venusUnit) - this.venusAge);
  }
  // create branch statement if they're over or under
}
