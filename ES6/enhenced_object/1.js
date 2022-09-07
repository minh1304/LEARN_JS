// Property Shorthand
    // var name = "Võ Tuấn Minh";
    // var age = 21;
    // var student = {name,age};
    // console.log(student);
// Computed Property Names
    // var n = "name";
    // var student = {
    //     ["student" + " " + n] : "Võ Tuấn Minh",
    //     age : 21    
    // }
    // for (let index in student) {
    //     console.log(index + ": " + student[index]);
    // }
//Method Properties.
    var student = {
        id: 19521858,
        fname: "Võ Tuấn",
        lname: "Minh",
        fullname: function(){
            return this.fname +" " + this.lname;
        }

    }
    console.log(student.fullname());