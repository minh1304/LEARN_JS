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



// var getRandNumbers = function(min, max, length){
//     var result = [];

//     for (var i = 0; i<length; i++)
//     {
//          result.push(Math.floor(Math.random() * (max - min) + min ));
//     }
//     return result

// }
// console.log(getRandNumbers(2,9,5)); //2 tới 9 và có 5 phần tử




// function getTotal(arr) {
//     var result = 0;
//     for(i = 0; i<arr.length; i++)
//     {
//         result += arr[i];
//     }
//     console.log(result);
    
// }
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17


var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
var n_length = orders.length;

var getTotal = function(arr){
    var result = 0;
    for (i =0; i< n_length; i++)
    {
        result += arr[i].price;
    }

    console.log(result); 
    

}

// Expected results:
// console.log(orders[1].price);


getTotal(orders) // Output: 8700000