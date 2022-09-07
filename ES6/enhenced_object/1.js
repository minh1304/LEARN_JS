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
    // var student = {
    //     id: 19521858,
    //     fname: "Võ Tuấn",
    //     lname: "Minh",
    //     fullname(){
    //         return this.fname +" " + this.lname;
    //     }

    // }
    // console.log(student.fullname());
    var student = {
        id: 19521858,
        fname: "Võ Tuấn",
        lname: "Minh",
        fullname(){
            return this.fname +" " + this.lname;
        },
        setname(fullname){
            this.fullname = fullname;
        },
        getname(fullname){
            return this.fullname;
        }


    }
    console.log(student.fullname());
    student.setname("Phạm Văn T");
    console.log(student.getname());
