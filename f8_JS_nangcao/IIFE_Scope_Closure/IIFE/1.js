// (function(message){
//     console.log('message: ' , message);
// })("chao ban")



// const app = {
//     car: [],
//     add(car){
//         this.car.push(car)
//     },
    
//     edit(index,car){
//         this.car[index] = car
//     },
//     remove(index){
//         this.car.splice(index,1);
//     }

// }
// app.add('honda');
// app.add('honda1');
// app.add('honda2');
// app.add('honda3');
// app.remove(2);
// app.car = null;
// app.add('honda1');

// console.log(app.car);



const app = (function() {
    const cars = []
    return{
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        
        edit(index,car){
            cars[index] = car
        },
        remove(index){
            cars.splice(index,1);
        }
    }


})()
app.add('honda');
app.add('honda1');
app.add('honda2');
app.add('honda3');
app.remove(2);
app.add('honda1');
console.log(app.get(1));
