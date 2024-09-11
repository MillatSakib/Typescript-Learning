var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//any and unknown type
var userName10;
userName10 = "anis";
userName10 = 121;
userName10 = true;
userName10 = [10, 20];
console.log(userName10);
//unknown type is safer than any type. Because you have to check type before perform any operation
var someValue = "Hello World";
someValue = 42; // No error, but...
// TypeScript will not allow you to use this value without type checking
// someValue.foo(); // Error: Object is of type 'unknown'.
if (typeof someValue === "string") {
    console.log(someValue.toUpperCase()); // Works, because we checked the type
}
//object type in typescript
var user1;
user1 = {
    userName: "Sakib",
    userId: 222902036,
};
var user2;
user2 = {};
var users;
users = [{ name: "anis" }, { name: "lucky" }];
users.push(user1);
users.push(user2);
console.log(users);
//custom type in typescript
var userX;
userX = {
    userName: "Sakib",
    userId: 222902036,
};
var userY;
userY = {};
var userses;
userses = [{ name: "anis" }, { name: "lucky" }];
users.push(userX);
users.push(userY);
console.log(users);
//index.ts -> tsc.index.ts --watch -> nodemon index.js
// class and object
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("The user name is", this.userName);
    };
    return User;
}());
var user10 = new User("Md. Sohan Millat Sakib", 22);
user10.display();
//inheritence
var User2 = /** @class */ (function () {
    function User2(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User2.prototype.display = function () {
        console.log("Thank you ".concat(this.userName, "! You can successfully run the programm..."));
    };
    return User2;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    return Students;
}(User2));
var studentUser = new Students("Mansina", 22, 123456);
studentUser.display();
