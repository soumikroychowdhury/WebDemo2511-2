var a=1;
// function solve1(){
//     console.clear();
//     console.log(a);
//     a++;
// }
// setInterval(solve1,1000);
function solve2(){
    console.clear();
    console.log(a);
    a++;
    setTimeout(solve2,1000);
}
setTimeout(solve2,1000);