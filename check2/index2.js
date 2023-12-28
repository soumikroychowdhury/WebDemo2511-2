const fs=require('fs');
function add(n){
    console.log(n);
}
function check(err,content){
    add(content);
}
fs.readFile("number1.txt","utf8",check);
console.log("Check");