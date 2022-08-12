document.addEventListener("DOMContentLoaded", function(){
    var nut = document.getElementById('nut1');
    var khoi = document.getElementsByClassName("card")
    nut.onclick = function() {
        khoi[0].classList.toggle('diqua')
    
    }


},false)

