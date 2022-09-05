//Khai báo một arrow function không truyền vào tham số.
    // var getName = () => "Võ Tuấn Minh";
    // console.log(getName());
//Khai báo một arrow function có truyền vào tham số.
    // var getName = (name) => console.log(name);
    // getName("Võ Tuấn Minh");
// Ví dụ với phương thức map
    // var listData = [
    //     'Võ Tuấn Minh', 
    //     'khmt2019',
    //     21,
    // ];
    // listData.map(value => console.log(isNaN(value) === true ? value.toUpperCase():value + 1 ));
    // console.log(listData);

//Ví dụ với phương thức foreach 
    // var ListNum = [1 , 2 ,3 ,4 ,5 ,9, 10];
    // var ahih = [];
    // ListNum.forEach(value => {
    //     if (value %2 ==0 )
    //     {
    //         ahih.push(value);
    //     }
    // });
    // console.log(ahih);

//Arrow funtion trong object 
    var student = {
        name: 'Võ Tuấn Minh',
        age: 21,
        getName : function (param) {
            console.log(param());
        },
        getAge : function (param) {
            console.log(param());
        },
        showAll : function() {
            this.getName(()=>{return "name: " + this.name});
            this.getAge(()=>{return "age: " + this.age});
        }

        
    };
    student.showAll();
