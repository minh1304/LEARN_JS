mathh = () =>{
    let a = 0;
    dem = () =>{
        return ++a;
    }
    return dem
}
var x  = mathh();
console.log(x());
console.log(x());
console.log(x());