
var fib=Array(5);
var x=fib.fill(0);
var z=x.reduce((a,b,i)=>{
        if(i<=1){
            a[i]=i;
        }
        else{
            a[i]=a[i-1]+a[i-2];
        }
        return a},[]);
console.log(z);        