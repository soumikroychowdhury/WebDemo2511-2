// function a2(){
//     console.log("time: 2");
// }
// function a1(){
//     console.log("time: 1");
//     setTimeout(a2,1000);
// }
// setTimeout(a1,1000);
setTimeout(function a1(){
    console.log("time: 1");
    setTimeout(function a2(){
        console.log("time: 2");
    },1000)
},1000)