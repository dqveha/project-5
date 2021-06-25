export default class GalacticAges {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.earthAge = "";
    this.mercuryAge = "";
    this.venusAge = "";
    this.marsAge = "";
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

  mercuryAgeCalc() {
    this.mercuryAge = Math.floor(this.earthAge * 0.24)
  }

  venusAgeCalc() {
    this.venusAge = Math.floor(this.earthAge * 0.62)
  }
}