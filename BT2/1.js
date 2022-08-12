document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById("nut1");
    var trangthai = "lan1";
    var bang =document.getElementsByClassName("card");
    nut.onclick = function(){
        if (trangthai=="lan1") {
            console.log("click lan 1");
            trangthai = "lan2";
        }
        else if(trangthai=="lan2")
        {
            console.log("click lan 2");
            trangthai = "lan1";
        }
    }

},false)