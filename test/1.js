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
