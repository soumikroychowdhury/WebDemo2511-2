function a(s){
    return s.split("").sort().join("");
}
function check(s1,s2){
    return a(s1)==a(s2);
}
console.log(check("hi","ih"));