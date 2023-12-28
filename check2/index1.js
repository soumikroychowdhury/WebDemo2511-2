var fruit_details=[{name:"apple",color:"red"},{name:"guava",color:"green"}];
for(var i=0;i<fruit_details.length;i++) console.log(fruit_details[i].name+" is "+fruit_details[i].color+" in color");
function add(val1, val2){
    return val1+val2;
}
function makeadd(val1, val2, func){
    return func(val1,val2);
}
function performadd(val1, val2, func){
    if(func==="add") return add(val1, val2);
}
var a=new Date().getTime();
console.log(makeadd(2,2,add));
console.log(performadd(2,2,"add"));
var b=new Date().getTime();
console.log((b-a)/1000);