document.addEventListener("DOMContentLoaded",function(){

    var nut= document.getElementsByClassName("declick");
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            for (k= 0; k< nut.length; k++) {
                nut[k].classList.remove("mautrang")
                
            }
            this.classList.toggle("mautrang");
            //lấy về data-hiện lên
            var ndhienra = this.getAttribute("data-hienlen");
            var phan_tu_hien_ra = document.getElementById(ndhienra);
            phan_tu_hien_ra.classList.add('xuathien');
        }
        
    }


},false)