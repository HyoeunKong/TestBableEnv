// import 'core-js';

const p = Promise.resolve(10)
const obj = {
    a:10,
    b:20,
    c:30
};
const arr = Object.values(obj);
console.log(arr)
const exist = arr.inclueds(20);