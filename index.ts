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

// typescript enum - store constants duplicate value is not allowed here
// enum types: numeric, string and heterogenous

//numeric enum
enum RequestType {
  readData,
  deleteData,
  saveData,
}

console.log(RequestType);

// string enum
enum RequestType2 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
}

console.log(RequestType2);

//heterogenous enum

enum RequestType3 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
  id = 500,
}

console.log(RequestType3);

//any and unknown type
let userName10: any;
userName10 = "anis";
userName10 = 121;
userName10 = true;
userName10 = [10, 20];

console.log(userName10);

//unknown type is safer than any type. Because you have to check type before perform any operation

let someValue: unknown = "Hello World";
someValue = 42; // No error, but...

// TypeScript will not allow you to use this value without type checking
// someValue.foo(); // Error: Object is of type 'unknown'.

if (typeof someValue === "string") {
  console.log(someValue.toUpperCase()); // Works, because we checked the type
}

//object type in typescript

let user1: { userName: string; userId: number };
user1 = {
  userName: "Sakib",
  userId: 222902036,
};

let user2: object;
user2 = {};

let users: object[];
users = [{ name: "anis" }, { name: "lucky" }];

users.push(user1);
users.push(user2);
console.log(users);

//custom type in typescript
let userX: { userName: string; userId: number };
userX = {
  userName: "Sakib",
  userId: 222902036,
};

let userY: object;
userY = {};

let userses: object[];
userses = [{ name: "anis" }, { name: "lucky" }];

users.push(userX);
users.push(userY);
console.log(users);

//index.ts -> tsc.index.ts --watch -> nodemon index.js

// class and object

class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("The user name is", this.userName);
  }
}

let user10 = new User("Md. Sohan Millat Sakib", 22);
user10.display();
