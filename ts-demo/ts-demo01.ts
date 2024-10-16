import { Testi } from "./test";

const aaa: string = "hello";
console.log(aaa);

// class Site {
//     get name(): string {
//         return ("Runoob")
//     }
// }
// var obj = new Site();
// obj.name;

// const obj = {
//     set member(param) { }, // 忽略 set 操作

//     get member() { // get 返回 20
//         return 20;
//     },
// };

let xx: [string, number] = ["", 1];
xx.push(12); // 报错?

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log(c, Color); // 输出 2

// let xy:number|null|undefined;
// xy=undefined;
// let xy: never;
// xy = (() => { throw new Error("") })();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// var score1:string = 50;
// var score2:number = 42.50
// var sum = Number(score1 + score2)

var str = "1";
var str2 = <string>(<any>str); //str、str2 是 string 类型
console.log(str2);

function add(x: number = 0, ...y: number[]): number {
  return Math.max(x, ...y);
}
add(0, 3, 7, 8);

var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

// function disp(s1: string): void;
// function disp(n1: number, s1: string): void;

function disp(x: string | number, y?: unknown): void {
  console.log(x);
  console.log(y);
}

disp(1, 2);

// function getLength(something: string | number): number {
//     return something.length;
// }
type abc = {
  aa: string;
};

interface Person {
  readonly name: string;
  age?: number;
  // [x: string]: any
  [x: number]: string | number | undefined;
  [x: string]: string | number | undefined;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  1: "male",
  // a: 1,
};

let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');

function createArray<Ta>(length: number, value: Ta): Array<Ta> {
  let result: Ta[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
let aa = createArray(3, "2");
// aa.push(1)

// let mySum = function (x: number, y: number): number {
//     return x + y;
// };

let mySum: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
// mySum("", 2);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
reverse("23");

// abstract class Animal {
class Animal {
  name: string;
  constructor(name?: string) {
    this.name = name || "";
  }
}
class Dog extends Animal {
  color: string | undefined;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  say() {}
}
let ani = new Animal();
ani.name = "a";
(ani as Dog).say();
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

declare let abc: number;

type EventNames = "click" | "scroll" | "mousemove";

let ev: EventNames = "click";

(window as any).foo = 1;

let d: () => number;
d = () => 12;

const domA = document.getElementById("aa");
console.log(domA?.nodeName);

class MyClass {
  static count = 11;
  constructor(public name: string) {}
  get len() {
    return 2;
  }
}
let myc = new MyClass("");
// myc.len = 1;
interface TParam {
  length: number;
}
function testFn<T extends TParam>(a: T): number {
  return a.length;
}
testFn({ length: 2 });

const aDom = document.getElementById("foo");
declare interface HTMLElement {
  test: string;
}
// aDom!.test = "";
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

function testAnimal(animal: Cat | Animal) {
  // (animal as Cat).run?.();
  (animal as Cat).run?.();
}

testAnimal({ name: "" });

let obj1: Testi = { name: "" };
console.log(obj1);

interface AA {
  aa: string;
}
interface BB {
  bb: number;
}
let a_b: AA & BB = {
  aa: "",
  bb: 1,
};
