const age = [20,15,27,30,17];
const age2 = [22,15,29,35,17];
const age3 = [20,26,27,40,17];

const allAges = [...age, ...age2, 6,  ...age3];
console.log(allAges);


//finding max value in an array

const business = 650;
const minister = 550;
const politics = 850;

// const maximum = Math.max(business,minister,politics);
const money = [750, 620, 900];
const maximum = Math.max(...money);
console.log(maximum);