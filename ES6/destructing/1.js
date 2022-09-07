//Arr matching 
    // var list =[1 , 2, 3];
    // var [a,b,c] = list;
    // [a,c] = [c,a]
    // console.log(a);
    // console.log(b);
    // console.log(c);
// Matching object 
    // var getobj =() =>{
    //     return {name: "Võ Tuấn Minh",
    //     age: 21,
    //     id: 19521858,};

    // };

    // var {name,age,id} = getobj();
    // console.log(name);
//Parameter Context Matching. (Truyền tham số cho hàm)
    // var logArr =([a,b]) => {
    //     console.log(a,b);
    // }
    // logArr(["Tham Số A -", "- Tham số B"]);
    // var logObj = ({a,b}) =>{
    //     console.log(a,b);

    // }
    // logObj({a: "Tham số a + " , b: "Tham số b"})





//Rest params (truyền nhiều phần tử)
    calculate= (action,... values) =>{
        let resulf = 0;
        console.log(values);
        switch(action){
            case '+':
                for(let value of values) resulf+= value;
                break;
        }
        return resulf;

    }
    console.log(calculate("+",1,2,3,4,6,7));