function twiceAsOld(dadYearsOld, sonYearsOld) {
  let pastAge = dadYearsOld - sonYearsOld * 2;
  let futureAge = sonYearsOld * 2 - dadYearsOld;

  if (pastAge >= 0) {
    return pastAge;
  }
  return futureAge;
}

console.log(twiceAsOld(55, 30));

// https://www.codewars.com/kata/5b853229cfde412a470000d0/solutions/javascript

// look up Math.abs()
