// var obj1={method:"GET"};
// function check2(JSONBody){
//     console.log(JSONBody);
// }
// function check1(res){
//     res.json().then(check2);
// }
// fetch("http:localhost:3000/solve?a=100",obj1).then(check1);
fetch("http:localhost:3000/solve?a=100",{method:"GET"}).then((res)=>{res.json().then((body)=>{console.log(body);})});