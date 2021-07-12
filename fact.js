var o = [];
function f(n){
    for(var value = 1; value <= n; value++) {
    o.push(value);
}
}
f(5);
console.log(o.reduce((x, y, z) => x + x * z,1));
