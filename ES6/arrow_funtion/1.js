//Khai báo một arrow function không truyền vào tham số.
    // var getName = () => "Võ Tuấn Minh";
    // console.log(getName());
//Khai báo một arrow function có truyền vào tham số.
    // var getName = (name) => console.log(name);
    // getName("Võ Tuấn Minh");
// Ví dụ với phương thức map
    var listData = [
        'Võ Tuấn Minh', 
        'khmt2019',
        21,
    ];
    listData.map(value => console.log(isNaN(value) === true ? value.toUpperCase():value + 1 ));
    console.log(listData);