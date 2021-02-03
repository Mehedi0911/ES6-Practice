function double(num){
    return num*2;
}
const result = double(5);
console.log(result);

//same thing with ES6

const doubleIT = num =>num*2;
const result2 =  doubleIT(50);
console.log(result2);

const add = (x,y) => x + y;
const result3 = add(20,30);
console.log(result3);


const give5 = () => 5;
const result4 = give5();
console.log(result4);

//arrow function with multiple operations

const doMath = (a,b) => {
    const addition = a + b;
    const diff = a - b;
    const product = addition*diff;
    return product; // for multiple operation return has to be declared.
}

const doMathResult = doMath(10,5);
console.log(doMathResult);