var a={check:function(){return "hello"}};
console.log(a.check());
const fs=require('fs');
const f1=require('fs').promises;
function a1(err,data){
    if(err) console.log(err);
    else console.log(data);
}
fs.readFile('number1.txt','utf8',a1);
f1.readFile('number1.txt','utf8').then(a1);