const name= "hipu"
const repocount= 50

//console.log(name + repocount +"Value"); Either we can write like this

//or

console.log(`Hello My name is ${name} and my repocount is ${repocount}`);

const gamename= new String('herox-po')

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.toUpperCase());
console.log(gamename.length);
console.log(gamename.charAt(2));
//these are string elements

console.log(gamename.indexOf('o'));

//to cut the string
const newstring= gamename.substring(0,4)
console.log(newstring);
