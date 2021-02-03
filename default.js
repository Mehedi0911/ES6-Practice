function add(num1, num2 =20){ //keeping backup if any parameter is undefined
    // num2 = num2 || 0; //keeping backup if any parameter is undefined
    return num1 + num2;
}

const total = add(15,10);
console.log(total);

