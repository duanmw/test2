"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aaa = "hello";
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
let xx = ["", 1];
xx.push(12); // 报错?
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
console.log(c, Color); // 输出 2
// let xy:number|null|undefined;
// xy=undefined;
// let xy: never;
// xy = (() => { throw new Error("") })();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
// var score1:string = 50;
// var score2:number = 42.50
// var sum = Number(score1 + score2)
var str = "1";
var str2 = str; //str、str2 是 string 类型
console.log(str2);
function add(x = 0, ...y) {
    return Math.max(x, ...y);
}
add(0, 3, 7, 8);
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
// function disp(s1: string): void;
// function disp(n1: number, s1: string): void;
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp(1, 2);
let tom = {
    name: "Tom",
    age: 25,
    1: "male",
    // a: 1,
};
let fibonacci = [1, 1, 2, 3, 5];
// fibonacci.push('8');
function createArray(length, value) {
    let result = [];
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
let mySum = function (x, y) {
    return x + y;
};
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
reverse("23");
// abstract class Animal {
class Animal {
    constructor(name) {
        this.name = name || "";
    }
}
class Dog extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    say() { }
}
let ani = new Animal();
ani.name = "a";
ani.say();
let ev = "click";
window.foo = 1;
let d;
d = () => 12;
const domA = document.getElementById("aa");
console.log(domA === null || domA === void 0 ? void 0 : domA.nodeName);
class MyClass {
    constructor(name) {
        this.name = name;
    }
    get len() {
        return 2;
    }
}
MyClass.count = 11;
let myc = new MyClass("");
function testFn(a) {
    return a.length;
}
testFn({ length: 2 });
const aDom = document.getElementById("foo");
function testAnimal(animal) {
    var _a, _b;
    // (animal as Cat).run?.();
    (_b = (_a = animal).run) === null || _b === void 0 ? void 0 : _b.call(_a);
}
testAnimal({ name: "" });
let obj1 = { name: "" };
console.log(obj1);
