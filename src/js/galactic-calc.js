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
    const ageYear = today.getFullYear() - this.year;
    return ageYear;
  };
}