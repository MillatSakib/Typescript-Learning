//basic syntax of typescript
var userName = "anisul islam";
console.log(userName);
//basic function using typescript
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
//calling function
addNumbers(20, 30);
// addNumbers(20, 30);
//baisc type of typescript
var userId = 101;
var firstName = "Anisul ";
var lastName = "Islam";
var isActive = true;
console.log(userId, firstName, lastName, isActive);
//typescript union
var userIdentity;
// let userIdentity: (string | number | boolean);
userIdentity = "101";
console.log(userIdentity);
userIdentity = 101;
console.log(userIdentity);
userIdentity = true;
console.log(userIdentity);
function displayUserInfo(userIde) {
    console.log(userIde);
}
displayUserInfo("66");
//Array in typescript
// let userNames: string[];
var userNames;
userNames = ["anis", "rabu", "pinky"];
console.log(userNames[0]);
var multipleTypeArray;
multipleTypeArray = [1, "name"];
console.log(multipleTypeArray);
//tupple in typescript
var user;
user = [101, "anis"];
console.log(user);
//index.ts -> tsc.index.ts --watch -> nodemon index.js
