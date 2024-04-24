//----------------------------------Assigning Types & Type Inference

let a: number = 4;
let b = "hello"; //this is i love about typescript its already known the type instead of other type language

// u can only need to write type when u create a variable with no value/data
// 1. scenario
let c: string;
c = "hello type";

// other scenario as well function and others
// this is called "literal type" ( d: 3 ) bcz of const just in not in typescript not allowed also in javascript bcz of we expilicity set value
// const d = 3;
// is just like
let d: 3 = 3; // never write like this use const version

// no need to worrie in javascript but typescript does
// null & undefined both are different just like in javascript
// const e = null

// e= undefined
// let e:undefined = undefined
// e= null
// let e = undefined; // same let e;
// e = null;
const e = undefined; // same let e;

//----------------------------------Array Type

// let f : number[] = [1,2,3]

// f = [4,5,6]
// let f : number[] = [1,2,3]
// f.push("45") //typescript smart enough no need to declare type

let f: [1, 2, 3] = [1, 2, 3]; //expilicit literal type
// f.push(4) //not pushing

// let f : Date[] = [new Date()] //Date has object type

//----------------------------------Any Type

// i don't it could be anything
// let g: any
// g= 2
// g= "23"

// if u use any u loose typescript benefit
// so really any is a bad idea

// let h = undefined / null // here h is any bcz of let

// u need to aware about any in this scenario -- by default any
// JSON.parse
// fetch

const i = JSON.parse("nfunwjekr"); // here i is any bcz JSON parse return anything
const j = fetch("")
  .then((res) => res.json())
  .then((data) => data);

//----------------------------------Object Basics

// has infered type only name and age
// const person = {
//     name: "Dilshad",
//     age: 22
// }

// person.isProgrammer = true // in typescript not include in my person type
// 1. u need to munually include type in person
// 2. if u add type so u can also added the data
// seperate by "," , ";" or new line your choice

const person: { name: string; age: number; isProgrammer?: boolean } = {
  name: "Dilshad",
  age: 22,
  //   isProgrammer: false your choice
};

// but i want isProgrammer Optional
// answer is add ? at the end of type so it can be boolean or undefined

person.isProgrammer = true; // your choice add or not

// note: also objects has advance topics but now it is the bare bone basics of objects in typescript more complex objects or nested objects

//----------------------------------Types & Interfaces

// not define type in one line extract them in to own type and make them reuseble

// note:  it has two ways types or interface with minor difference

//# Types
// capital case naming

// object type
type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  };
};

// type Person = number

// person2 has Person type
// const person2: Person =3;

const person2: Person = {
  name: "Dilshad",
  age: 22,
  friends: [],
  address: {
    street: "main str.",
  },
};

// const person3: Person = {
//   name: "Ashir",
//   age: 21,
//   friends: [],
// };

//# Interfaces -- newly way

// interface keyword
// not set or assign but define in inter face
// 1. != no need to equal sign bcz of interface can only be use with object
// it must be used with type object
// 2. Downside i could not set number string etc single type only use with something which has object type

// example:  interface PersonInterface  number //error

interface PersonInterface {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  };
}

const person4: PersonInterface = {
  name: "Dilshad",
  age: 22,
  friends: [],
  address: {
    street: "main str.",
  },
};

// have some other minor difference see on later
// Note: both work exactly same only difference in write
// ur personal preference u want use type or interface my is type it is more flexible compare to interface
//Example: type Person = number
