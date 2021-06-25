import GalacticAges from '../src/js/galactic-calc.js';

describe('GalacticAges', () => {
  let ages;

  beforeEach(() => {
    ages = new GalacticAges(1990, 9, 3);
  })

  test('should properly create an age object with properties defining years in Earth, Mercury, Venus, Mars, and Jupiter and another property to input date of birth', () => {
    
    expect(ages.year).toEqual(1990);
    expect(ages.month).toEqual(9);
    expect(ages.day).toEqual(3);
    expect(ages.earthAge).toEqual("");
    expect(ages.mercuryAge).toEqual("");
    expect(ages.venusAge).toEqual("");
    expect(ages.marsAge).toEqual("");
  });
  
  test('should calculate and return the difference of this year and birthdate year', () => {
    expect(ages.dateOfBirthCalc()).toEqual(31);
  });
});
  
  
  