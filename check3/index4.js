function a1(){
    return new Promise(function(a){
        setTimeout(a,1000);
    })
}
a1().then(function(){
    console.log("time: 1");
})
function b1(a){
    setTimeout(a,1000);
}
function b2(){
    return new Promise(b1);
}
function a2(){
    console.log("time: 1");
}
b2().then(a2);