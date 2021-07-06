function fact(a){
  var y = 1;

  if (a == 0 || a == 1)
  {
    return y;
  }
  else
  {
    for(var i = a; i >= 1; i--){
      y = y * i;
    }
    return y;
  }  

}
console.log(fact(1));

