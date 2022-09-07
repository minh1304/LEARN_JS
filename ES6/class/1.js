class Employee {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        return this.name + ' - ' + this.age;
    }
    setName(name){
        this.name = name;
    }
    getName(name){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(age)
    {
        return this.age;
    }


}
let employee = new Employee("Tuấn Minh", 21);
console.log(employee.showInfo());