const express=require('express');
var bodyParser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());
var n=0;
function middleware1(req,res,next){
    n++;
    console.log("Middleware 1: The value of a is "+req.body.a);
    if(n<10000) next();
    else res.send("Middleware Check: Limit Exceeded");
}
app.use(middleware1); //to use middleware1 for all routes
function solve(a){
    var ans=0;
    for(var i=1;i<=a;i++) ans+=i;
    return ans;
}
function solve1(a){
    var ans=1;
    for(var i=1;i<=a;i++) ans*=i;
    return ans;
}
app.post('/solve',(req,res)=>{
    //console.log(req.headers);
    console.log(req.body);
    // var a=req.headers.a;
    var a=req.body.a; //{"a":100} - raw (JSON)
    if(a<=10000){
        // var ans="The answer is "+solve(a);
        var ans={sum:solve(a),factorial:solve1(a)}; //res.send(ans) or res.json(ans);
        res.send(ans); //res.status(200).send(ans);
    }
    else{
        res.status(400).send("The value of a is greater than 10000");
    }
})
// app.post('/check',middleware1,(req,res)=>{ //to use middleware 1 for this route - post method
//     console.log(req.body);
// })
app.listen(port,()=>{
    console.log("Server is running at port "+port);
})