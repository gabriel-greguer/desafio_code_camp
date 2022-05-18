const { type } = require('os');

var input = require('fs').readFileSync("sdtin", 'utf8');

var lines = input.split("\n");

// lines [0] = 7
// lines [1] = 14
// lines [2] = 106

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]); 


var abs = Math.abs(a-b) 
var maior =  ( a + b + abs ) /2

abs = Math.abs(c-maior)

var oMaior = (c+maior+abs)/2

console.log(`${oMaior} eh o maior`);


document.getElementsByName



