//# Primitive

//7 types: String, number,boolean,null,undefined,symbol,BigInt


//# Reference Types(Non-Primitive)

//Array, Objects, Functions

const heroes=["shaktimaan", " naagraj", "doga"];
let myObj={
    name: "hitu",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
}

//if you'll try to find the type of non primitive datatypes, you'll get object as a type


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(Primitive), Heap Memory(Non-Primitive)

let myYoutubename="navneetdhardubey"
let anothername= myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1= {
    email:"user@google.com",
    upi: "user@ybl"
}

let user2= user1

user2.email="navneet@google.com"

console.log(user1.email);
console.log(user2.email);

