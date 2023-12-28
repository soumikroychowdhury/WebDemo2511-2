const express=require('express');
const app=express();
const port=3000;
function solve(a){
    var ans=0;
    for(var i=1;i<=a;i++) ans+=i;
    return ans;
}
app.get('/solve',(req,res)=>{
    var a=req.query.a; // localhost:3000/solve?a=100&b=100
    var ans="The answer is "+solve(a);
    res.send(ans);
})
app.get('/users/:username',(req,res)=>{
    var username=req.params.username;
    res.send("Hello "+username);
})
app.listen(port,()=>{
    console.log("Server is running at port "+port);
})