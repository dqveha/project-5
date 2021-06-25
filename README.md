# SUPER GALACTIC AGE CALCULATOR-THINGY-MA-BOB

## [https://github.com/dqveha/super-galactic-calc/](https://github.com/dqveha/super-galactic-calc/)

## [https://dqveha.github.io/super-galactic-calc/](https://dqveha.github.io/super-galactic-calc/)

#### By Dave Lindqvist

---

## Technologies Used

1. HTML5+CSS3
2. JavaScript/ES2018+
3. jQuery
4. Bootstrap
5. webpack/webpack-cli/webpack dev server
6. ESlint
7. Babel transpiler
8. Jest testing

## Project Description

This is the fifth independent project assigned by Epicodus to assess the use of Jest, and working within environments. The purpose of the web application is to let the user input their date of birth, and have it output their age in Mercury, Venus, Earth, Mars, and Jupiter years. In addition, it will provide a life expectancy that will either show the user how much life expectancy they have left, or how many years they passed the average life expectancy.

Additional features added from author:

- Requirement of an entered date before showing results
- Disabling user to input future date
- Happy Earth-Birthday alert
- Reset button

Credit: Life expectancy average - [https://ourworldindata.org/life-expectancy](https://ourworldindata.org/life-expectancy)

### Installation Instructions

1. Clone this repo: `git clone https://github.com/dqveha/super-galactic-calc.git`
2. Enter new directory `cd super-galactic-calc`
3. Install dependencies with `npm install`
4. To run it locally, use the npm dev command `npm run start`
5. Open your web browser and navigate to http://localhost:9001
6. For a production build, use `npm run build`

---

### Known Issues:

1. NO KNOWN ISSUES
2. Please open a pull request if you have any issues!

---

### Test Suite/Specification

> See also [the Jest Test File](super-galactic-calc/coverage/lcov-report/index.html) for Jest Test Suite which includes 14 passing tests. View Test Results from Project Directory by Running `yarn run test` or if you prefer npm `npm run test`

```
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

```

---

### License is GPLv3 and I make no claim to copyright.
