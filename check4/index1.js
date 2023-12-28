var details=[{name:"water",type:"liquid",price:100},{name:"juice",type:"liquid",price:150},{name:"apple",type:"fruit",price:300},{name:"guava",type:"fruit",price:250}];
function solve(details){
    var ans=[],a={};
    for(var i=0;i<details.length;i++){
        var detail=details[i];
        if(a[detail.type]) a[detail.type]+=detail.price;
        else a[detail.type]=detail.price;
    }
    var keys=Object.keys(a);
    for(var i=0;i<keys.length;i++){
        ans.push({type:keys[i],price:a[keys[i]]});
    }
    return ans;
}
console.log(solve(details));