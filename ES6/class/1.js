class Employee {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        return this.name + ' - ' + this.age;
    }
    set employeeName (name){
        this.name = name;
    }
    get employeeName(){
        return this.name;
    }
    set employeeAge(age){
        this.age = age;
    }
    get employeeAge()
    {
        return this.age;
    }


}
//setter and getter 
console.log( Employee.employeeName = "Võ Tuấn Minh");

// let employee = new Employee("Tuấn Minh", 21);

// // console.log(employee.showInfo());