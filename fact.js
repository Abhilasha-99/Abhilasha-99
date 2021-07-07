function fact(n){
if(n<0){
console.log("Factorial for negative numbers doesn't exist");
}
else if(n==0){
console.log(1);
}
else{
var x=1;
for(let i=1;i<=n;i++){
x=x*i;
}
console.log(x);
}
}
fact(-1);