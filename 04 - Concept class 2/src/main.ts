//------------------------------------------Defining function
function Print(name: string, name2: string) {
  //straight forward
  console.log(name, name2);
}

// - in case of return

function sum(a: number, b: number) {
  return a + b;
}

// implicit c is number i could not define the type of return
const c = sum(2, 3);

// if i want to explicit define the return type
// sum(a: number, b: number) : number like this

// but i recommended not use explicit type in function return use implicit or inference

// - passing objects to a function
type Person = {
  name: string;
};

function personFunc(person: Person) {
  console.log(person.name);
}

// personFunc({ name: "john" }); //working fine if i added age has error occur
// personFunc({ name: "john", age: 22 });// it show age not found in type when u manually type

// but its work i this scenario
// not work in only in typescript hardcore personFunc({ name: "john", age: 22 });
// bcz typescript known u type object in explicit way it doesn't come from another object just like name spell or just like extra check

const person = { name: "john", age: 22 };

// bcz of person object has some thing which u don't need to write
// typescript is little bit different from super strict type language u may use in the past
// typescript only looks the structure of object if they are correct type
personFunc(person);

// Note: result typescript is structural base

//------------------------------------------Void Type
// slightly different from undefined
// in javascript function does noting return means it return undefined but in typescript it is void
// if u want to do in typescript need to mauallay type undefined return

// void function does not return anything
function voidFunction(printName: string): void {
  console.log(printName);
  // return still void
  // return undefined now function return undefined
}

const d = voidFunction("Ahmed");

//------------------------------------------Optional Parameters
// in previous we see optinal type now it is parameters
// here is options params are optional by ?
function PrintNameAndOptions(name: string, options?: { debugMode: boolean }) {
  console.log(name, options);
}

PrintNameAndOptions("sfkj");

//------------------------------------------Destructured & Rest Parameters

type Options = {
  debugMode?: boolean;
  indentLevel?: number;
};

function PrintNameAndOptions2(
  name: string,
  { debugMode = false, indentLevel }: Options = {} // not need option type to write
) {
  console.log(name, debugMode, indentLevel != null ? indentLevel : "");
}

// - when u destructed u can't use {debug= false, index: number} but u can use in javascript its painfull use  types

PrintNameAndOptions2("string", { debugMode: true });

// Result : if u have default value of params no need to manually write type
// if not have default value u need to write type
// u can't write params like this { debugMode = false, indentLevel: number } bcz of  ( : number ) this already set in javascript

// - Rest Operators

// i u use rest operators use [] syntax
// like this number[]
function sumOfNumbers(...nums: number[]) {
  return nums.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

console.log(sumOfNumbers(14, 6));

//------------------------------------------Typing Variables As Function
// Function is generic it doesnot know type of callback params
// u write like arrow func
function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallback(4, 4, (sum) => {
  //no worrie about receive param it same like javascript
  console.log(sum);
});

// Another Examples callback in types:-

// 2- same to same function and type
// type PrintStuff = ()=> void
// function printStuffFuc(){
//   return
// }

// 2- same to same function and type
// type PrintStuff = (name: string)=> number
// function printStuffFuc(name: string): number{
//   return  4
// }

//------------------------------------------Unions
// definition:  one thing must be something or something or
// this is unions => number | string
// one of multiple things

let id: number | string = "7";

id = 7;

// type Person = {
// id: number | string
// isProgrammer?: boolean
// both are same
// isProgrammer: boolean | undefined
// }

type TODO = {
  name: string;
  // status: string
  status: "complete" | "incomplete" | "draft"; //specific union
};

// const todo : TODO = {name : "Dilshad", status: "complated"} //no work
const todo: TODO = { name: "Dilshad", status: "complete" }; //work

// a union of multiple union of type example

type PersonCopy = {
  name: string;
  age: 23;
};

// person or todo

// type PersonTODO = TODO  | { name: string
//   age: 23}
// both can do
// type PersonTODO = TODO  | PersonCopy

// !!! puzzle/problem/incomplete  solve
// interface not support union but type does

// interface PersonTODO = TODO | PersonCopy // no way to do that

interface TODOCopy {
  name: string;
  // status: string
  status: "complete" | "incomplete" | "draft"; //specific union
}

interface PersonCopy2 {
  name: string;
  age: 23;
}

// type PersonTODO = TODOCopy | PersonCopy2 // work

// but it can not work with interface

// that why i like type instead of interface

//------------------------------------------Intersection

// is opposite of union at a time both type
// it use to add more content specially which is already exists

type NewPerson = {
  name: string;
  age: number;
};

type PersonWithId = NewPerson & { id: string };

const personOne: PersonWithId = { id: "uwqij", name: "Dilshad", age: 22 };

// u can do also with interface but syntax is different

interface NewPerson2 {
  name: string;
  age: number;
}

interface Todo {
  complete: boolean;
}

interface PersonWithId2 extends NewPerson, Todo {
  id: string;
}
// interface PersonWithId2 extends NewPerson {}

// this is definition { id: string } of my interface it must be there also in empty form bcz its combine all array
const personOne2: PersonWithId2 = {
  id: "uwqij",
  name: "Dilshad",
  age: 22,
  complete: true,
};

// WITH TYPE

type NewPerson3 = {
  name: string;
  age: number;
};

type Todo3 = {
  complete: boolean;
};

type PersonWithId3 = NewPerson3 &
  Todo & {
    id: string;
    name: number;
  };

// const personOne3: PersonWithId3 = {
//   id: "uwqij",
//   name: "Dilshad", //not work at a time incompatible types
//   age: 22,
//   complete: true,
// };

// not usefull intersection like union in primitive value
// age: number | string
// age: number & string not make sense

//------------------------------------------ReadOnly
type ReadOnlyPerson = {
  readonly id: number;
  name: string;
  age: number;
};

const person4: ReadOnlyPerson = { id: 3, name: "Dilshad", age: 23 };

// person4.id = 4 // error bcz to restrict to

// - in array

type NumberArray = readonly number[];

const nums: NumberArray = [1, 2, 3];

// nums.push(4)

// if u add a keyword readonly keyword in array u can't modify the array means modify method does not work but other method work which does not change the array means manuplate

//------------------------------------------Keyof

type PeronObjectType = {
  name: string;
  age: number;
  isProgrammer?: boolean;
};

getValue("name", { name: "Dilshad", age: 22 });

function getValue(key: keyof PeronObjectType, person: PeronObjectType) {
  return person[key];
}

// or in usefull groupBy

// function groupByName(key: keyof PeronObjectType, people: []) {
//   return people.reduce((acc, curr) => {
//     const groupKeyValue = curr[key];
//     if (!acc[groupKeyValue]) {
//       acc[groupKeyValue] = [];
//     }
//     acc[groupKeyValue].push(curr);
//     return acc;
//   },{});
// }

//------------------------------------------Typeof

// u can use to do advance work and niche
// different from typeof of javascript

// - Example 1
const personObject = { name: "dilshad", age: 22, isProgrammer: true };

const personsArray: (typeof personObject)[] = []; // no need to decalare type use the personObject type
// may be true one day :)
personsArray.push({ name: "Ashir", age: 23, isProgrammer: false });

// - Example 2 in function

function sayHi(name: string){
  return name
}

//Func = (name: string) => string
type Func = typeof sayHi
