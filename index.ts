//basic syntax of typescript
let userName: string = "anisul islam";
console.log(userName);

//basic function using typescript
function addNumbers(num1: number, num2: number) {
  console.log(num1 + num2);
}

//calling function
addNumbers(20, 30);
// addNumbers(20, 30);

//baisc type of typescript
let userId: number = 101;
let firstName: string = "Anisul ";
let lastName: string = "Islam";
let isActive: boolean = true;

console.log(userId, firstName, lastName, isActive);

//typescript union
let userIdentity: string | number | boolean;
// let userIdentity: (string | number | boolean);

userIdentity = "101";
console.log(userIdentity);
userIdentity = 101;
console.log(userIdentity);
userIdentity = true;
console.log(userIdentity);

function displayUserInfo(userIde: string | number) {
  console.log(userIde);
}

displayUserInfo("66");

//Array in typescript
// let userNames: string[];
let userNames: Array<string>;
userNames = ["anis", "rabu", "pinky"];
console.log(userNames[0]);

let multipleTypeArray: (string | number)[];
multipleTypeArray = [1, "name"];
console.log(multipleTypeArray);

//tupple in typescript

let user: [number, string];
user = [101, "anis"];
console.log(user);
//index.ts -> tsc.index.ts --watch -> nodemon index.js
