document.addEventListener("DOMContentLoaded",function(){

    var nut= document.getElementsByClassName("declick");
    var nd = document.getElementsByClassName("danhsach");
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            for (k= 0; k< nut.length; k++) {
                nut[k].classList.remove("mautrang")
                
            }
            this.classList.toggle("mautrang");
            //lấy về data-hiện lên
            var ndhienra = this.getAttribute("data-hienlen");
            var phan_tu_hien_ra = document.getElementById(ndhienra);
            for (var i= 0;i < nd.length; i++) {
                nd[i].classList.remove('xuathien');
                
            }

            phan_tu_hien_ra.classList.toggle('xuathien');
        }
        
    }


},false)