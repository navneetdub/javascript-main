const score= 400

const balance= new Number(100)
console.log(balance);

//now changing into string and using elements of strings

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //to use precise demical values, use toFixed

const othernumber= 123.8966

console.log(othernumber.toPrecision(3)); //to use approx roundoff figures upto number written on brackett, use toPrecision

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.7));
//to control roundfigures upper and lower
console.log(Math.ceil(4.2));// high values
console.log(Math.floor(4.2));// low values

console.log(Math.random());// random value always comes between 0 to 1
console.log((Math.random()*10)+1);//shifting values to get greater than 1

//to get randommvalues between min and max values mentioned,formula is given below--
const min= 13
const max=25
console.log(Math.floor(Math.random() * (max-min +1))+min);



