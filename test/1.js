x = 10;
y= 20;
z = 1;
function chaythu(){
    console.log('ket qua la: ' + z);
    z +=1;
}

// object
hocvien = {
    ten : 'Minh',
    ho : 'Vo',
    tuoi: 21,
    chieucao: 170,
    nang: 60,
    hienthi :function(){

        console.log(this.ho + " " + this.ten);


    },
    ahihi :function(){
        if (this.chieucao/this.nang) {
            return "ahihi"
            
        } else {
            return "ahuhu";
            
        }

    }

};
hocvien.hienthi();
console.log(hocvien.ahihi());

// funtion

a=3;
b=4;
function Sum(a,b){
    tong = a+b;
    console.log("tong 2 so la: ", tong);
}
Sum(a,b)

function Sum1() {
    tong = a+ b;
    return tong;
}
console.log(Sum1(a,b));


z = function () {
    return a + b ;
}
console.log(z(a,b));


function chao(){
    var ten = "minh";
    return function (){
        console.log("cafe ko " +ten);
    }
}
h = chao();
h();


//contructor

function Monan(t,nl,g) 
{
    this.ten  = t;
    this.nguyenlieu = nl;
    this.gia = g; 
}
var x = new Monan("thit kho", "Trung", "10000")
console.log(x);