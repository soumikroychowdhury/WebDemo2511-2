const express=require('express');
var bodyParser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());
function solve(a){
    var ans=0;
    for(var i=1;i<=a;i++) ans+=i;
    return ans;
}
app.get('/solve',(req,res)=>{
    var a=req.query.a;
    var ans={sum:solve(a)};
    res.send(ans);
})
app.get('/',(req,res)=>{
    res.send(`
    <head>
    <title>
        Hello World
    </title>
</head>
<body>
    <b>Hello World</b>
</body>`);
    // res.sendFile(__dirname+"/index1.html");
    // res.send({a:100});
    // res.send("<head><title>Hello World</title></head><body><b>Hello World</b></body>");
})
app.listen(port,()=>{
    console.log("Server is running at port "+port);
})