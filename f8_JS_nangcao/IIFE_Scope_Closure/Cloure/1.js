// mathh = () =>{
//     let a = 0;
//     dem = () =>{
//         return ++a;
//     }
//     return dem
// }
// var x  = mathh();
// console.log(x());
// console.log(x());
// console.log(x());
// 




// tets khóa học F8
// Viết hàm tại đây
// function getLastElement(array){

//     var last = array.length;

//     return array[last-1]
// }




// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']



var getRandNumbers = function(min, max, length){
    var result = [];

    for (var i = 0; i<length; i++)
    {
         result.push(Math.floor(Math.random() * (max - min) + min ));
    }
    return result

}
console.log(getRandNumbers(2,9,5)); //2 tới 9 và có 5 phần tử