var a = 12
if(a>10) {
    a  = 30
    var b = 67  // var scope is global
    console.log(a);
}
console.log(a)
console.log(b)