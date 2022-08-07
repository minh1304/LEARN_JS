x = 10;
y= 20;
z = 1;
function chaythu(){
    console.log('ket qua la: ' + z);
    z +=1;
}

// object
var hocvien = {
    ten : 'Minh',
    ho : 'Vo',
    tuoi: 21,
    chieucao: 170,
    nang: 60,
    hienthi :function(){

        console.log(this.ho + " " + this.ten);


    }
    

};
hocvien.hienthi();