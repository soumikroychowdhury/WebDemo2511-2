var a=1,b=1;
function check(){
    console.clear();
    console.log(a);
    a++;
}
setInterval(check,1000);
for(var i=0;i<100;i++) b++;
console.log(b);
//call stack, web api, callback queue, event loop