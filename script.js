//JavaScript Program to Print All Prime Numbers in an Interval
const primeinterval = (lownum, highnum) => {
  for (let i = lownum; i <= highnum; i++) {
    let isprime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        console.log(`${i} not a prime number`);
        isprime = false;
        break;
      }
    }
    if (isprime) {
      console.log(`${i} is a prime number`);
    }
  }
};

let lownum = parseInt(prompt("please enter low number"));

let highnum = parseInt(prompt("please enter high number"));

primeinterval(lownum, highnum);