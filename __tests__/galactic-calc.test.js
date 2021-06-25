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
    expect(ages.earthExpectancy).toEqual("");
    expect(ages.mercuryExpectancy).toEqual("");
    expect(ages.venusExpectancy).toEqual("");
    expect(ages.marsExpectancy).toEqual("");
    expect(ages.jupiterExpectancy).toEqual("");
    expect(ages.mercuryUnit).toEqual(0.24);
    expect(ages.venusUnit).toEqual(0.62);
    expect(ages.marsUnit).toEqual(1.88);
    expect(ages.jupiterUnit).toEqual(11.86);
  });
  
  test.skip('should calculate and return the difference of this year and birthdate year', () => {
    expect(ages.dateOfBirthCalc()).toEqual(31);
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

  test('should return life expectancy on Earth', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.earthExpectancy).toEqual(42);
  })

  test('should return life expectancy on Mercury', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.mercuryExpectancy).toEqual(10);
  })

  test('should return life expectancy on Venus', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.venusExpectancy).toEqual(26);
  })

  test('should return life expectancy on Mars', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.marsExpectancy).toEqual(79);
  })

  test('should return life expectancy on Jupiter', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.jupiterExpectancy).toEqual(498);
  })

  test('should branch appropriately if current age is less than average life expectancy', () => {
    ages.dateOfBirthCalc();
    ages.galacticAgeCalc();
    ages.lifeExpectancy();
    expect(ages.earthExpectancy).toEqual(42);
  })

  test('should branch appropriately if current age is older than average life expectancy and return years surpassed', () => {
    let olderAges = new GalacticAges(1900, 1, 1) 
    olderAges.dateOfBirthCalc();
    olderAges.galacticAgeCalc();
    olderAges.lifeExpectancy();
    expect(olderAges.earthExpectancy).toEqual(49);
  })
});
  


  
//I followed along with the Red, Green, Refactor workflow on https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/red-green-refactor-workflow; however, I think there's a discrepancy where I was suppose to commit a test before writing the corresponding method. I will admit now that I did not do that. I committed once I saw that my previous and current test passed per step 8.