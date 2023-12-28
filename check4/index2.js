function solve(s){
    s=s.toLowerCase(s);
    var l=s.length,i=0,j=l-1;
    while(i<j){
        while(s[i]==' '||s[i]==','||s[i]=='.'||s[i]=='?'||s[i]=='!'||s[i]==':'||s[i]=='\''||s[i]==';') i++;
        while(s[j]==' '||s[j]==','||s[j]=='.'||s[j]=='?'||s[j]=='!'||s[j]==':'||s[j]=='\''||s[j]==';') j--;
        if(i<j&&s[i]!=s[j]) return false;
        i++,j--;
    }
    return true;
}
console.log(solve("A B,  b    a;"));