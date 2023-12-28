type NumberArr=number[];
function a1(arr:NumberArr):number{
    return arr[0];
}
function a2(arr:number[]){
    return arr[0];
}
console.log(a1([1,2]));
interface User{name:string; height:number;}
type Users=User[];
type Arr=(string|number)[];
function a3(arr:(number|string)[]):(number|string){
    return arr[0];
}
console.log(a3(["a","b"]));
const s="AB";
console.log(s.toLocaleLowerCase());
function a4<T>(arr:T[]){
    return arr[0];
}
let c=a4(["a","b"]);
console.log(c.toLocaleLowerCase());
function swap1<T>(a:T,b:T){
    return [b,a];
}
function swap2<T,U>(a:T,b:U){
    return [b,a];
}
console.log(swap1(1,2)); console.log(swap2(1,"2"));
interface i1{
    id:string;
    title:string;
    description:string;
    status:boolean;
}
type i2={
    id?:string;
    title?:string;
    description?:string;
    staus?:boolean;
}
type InputType=Partial<i2>
function updateInfo(id:number,new1:InputType){
    console.log(id);console.log(new1);
}
updateInfo(1,{
    description:"hello"
})