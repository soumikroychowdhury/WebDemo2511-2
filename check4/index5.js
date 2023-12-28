function a(){
    const d=new Date(),h=d.getHours();
    console.clear();
    console.log(((h+11)%12+1)+":"+d.getMinutes()+":"+d.getSeconds()+" "+(h<12?"AM":"PM"));
}
setInterval(a,1000);