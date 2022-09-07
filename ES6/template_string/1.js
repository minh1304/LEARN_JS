// Khai báo biến dưới dạng template literals
    // var content = `I love UIT`;
    // console.log(content);
// Khai báo biến nhiều dòng dưới dạng template literals
    // var content = `<div>
    //     <font color = "red">19521858</font> 
    //     I love UIT.
    //     </div>`;
    // document.write(content);
//Binding giá trị vào template literials
    var infor = {
        name: 'Võ Tuấn Minh',
        id : 19521858,

    }
    var content = `<div>
        ${infor.name} 
        <font color = "red"> ${infor.id}</font> 
        I love UIT.
        </div>`;
    document.write(content);