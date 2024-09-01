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
// typescript enum - store constants duplicate value is not allowed here
// enum types: numeric, string and heterogenous
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["deleteData"] = 1] = "deleteData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
//heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 500] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
//index.ts -> tsc.index.ts --watch -> nodemon index.js
