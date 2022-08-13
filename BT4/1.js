document.addEventListener("DOMContentLoaded",function(){
    var tg = document.getElementById("tg");
    var ds = document.getElementById("ds");
    // var trangthai = "lan1";
    tg.onclick = function(){
        // if (trangthai=="lan1")
        // {
        //     console.log("click lan 1");
        //     this.style.color = 'white';
        //     ds.classList.add('xuathien');

        //     trangthai = "lan2"
        // }
        // else if (trangthai=="lan2")
        // {
        //     console.log("click lan 2");
        //     //cach moi
        //     this.style.color = 'black';
        //     ds.classList.remove('xuathien');
                        
        //     trangthai = "lan1"
        // }
        this.classList.toggle('tamgiactrang');
        ds.classList.toggle('xuathien');


    }

},false)