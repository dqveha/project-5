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
    expect(ages.jupiterAge).toEqual("");
  });
  
  test('should calculate and return the year after calculating difference of month and day from present time', () => {
    ages.dateOfBirthCalc()
    expect(ages.earthAge).toEqual(30);
  });

  test('should calculate and return age in Mercury years', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    expect(ages.mercuryAge).toEqual(7);
  });

  test('should calculate and return age in Venus years', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    expect(ages.venusAge).toEqual(18);
  });

  test('should calculate and return age in Mars years', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    expect(ages.marsAge).toEqual(56);
  });

  test('should calculate and return age in Jupiter years', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    expect(ages.jupiterAge).toEqual(355);
  });

  test('should return life expectancy in Earth', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.earthExpectancy).toEqual(42);
  })

  test('should return life expectancy in Earth', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.mercuryExpectancy).toEqual(10);
  })
});
  


// test('should calculate and return the difference of this year and birthdate year', () => {
  //   expect(ages.dateOfBirthCalc()).toEqual(31);
  // }); from starting line 21
  
  