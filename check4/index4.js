const fs=require('fs');
// let a="hello world";
// function complete(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("written successfully");
// }
// fs.writeFile('aa.txt',a,'utf8',complete);
function solve(a){
    let a1=a.split(" "),ansA=[];
    for(var i=0;i<a1.length;i++){
        if(a1[i].length){
            ansA.push(a1[i]);
        }
    }
    let ans=ansA.join(" ");
    return ans;
}
function write1(err){
    console.log("written successfully");
}
function read1(err,data){
    if(err){
        console.log(err);
        return;
    }
    let ans=solve(data);
    fs.writeFile('aa.txt',ans,'utf8',write1);
}
fs.readFile('aa.txt','utf8',read1);