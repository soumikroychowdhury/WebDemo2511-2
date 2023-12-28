let a:number=1;
console.log(a);
function calculate1(first:number, second:number):number{
    return first+second;
}
console.log(calculate1(1,1));
enum Arithmetic{Add,Sub,Mul,Div};
function calculate2(a:number,b:number,type:Arithmetic){
    if(type==Arithmetic.Add){
        return a+b;
    }
    if(type==Arithmetic.Sub){
        return a-b;
    }
    if(type==Arithmetic.Mul){
        return a*b;
    }
    return a/b;
}
console.log(calculate2(1,1,Arithmetic.Add));
interface PersonInterface{name:string; height:number;}
function greet(person:PersonInterface):string{
    return "Hello "+person.name;
}
console.log(greet({name:"A",height:6}));
class Person implements PersonInterface{
    name:string;
    height:number;
    constructor(name:string, height:number){
        this.name=name;
        this.height=height;
    }
    greet(){
        return "Hello "+this.name;
    }
}
const obj1=new Person("A",6);
console.log(obj1.greet());
interface PersonLocation{
    country:string;
}
interface Person1{
    name:string;
    locationDetails:PersonLocation;
}
function greet1(person:Person1){
    return "Hi "+person.name;
}
console.log(greet1({
    name:"a",
    locationDetails:{
        country:"A"
    }
}))
interface Person2 extends PersonLocation{
    name:string;
}
function greet2(person:Person2){
    return "Hi "+person.name;
}
console.log(greet2({
    name:"a",
    country:"A"
}))
interface Circle{
    radius:number;
    borderWidth?:number;
}
interface Square{
    side:number;
}
interface Rectangle{
    height:number;
    width:number;
}
type Shape=Circle|Rectangle|Square;
function showShape(shape:Circle|Rectangle|Square){
    if('radius' in shape){
        console.log("Circle");
    }
    else if('side' in shape){
        console.log("Square");
    }
    else{
        console.log("Rectangle");
    }
}
showShape({side:1});