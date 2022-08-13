document.addEventListener("DOMContentLoaded",function(){

    var nut= document.getElementsByClassName("declick");
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            this.classList.toggle("mautrang")
        }
        
    }


},false)