const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./samples.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [str, checkStr] = input.shift()

const dummy = input.slice(0, str);
const dummyCheck = input.map(n=>n.trim()).slice(str);

let dummySet = new Set(dummy);

console.log(dummyCheck.filter(el=>{
    return dummySet.has(el)
}).length)