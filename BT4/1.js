// document.addEventListener("DOMContentLoaded",function(){

//     var nut= document.getElementsByClassName("declick");
//     var nd = document.getElementsByClassName("danhsach");
//     for (var i = 0; i < nut.length; i++) {
//         nut[i].onclick = function(){
//             // cho tất cả .mautrang mất đi
//             for (k= 0; k< nut.length; k++) {
//                 nut[k].classList.remove("mautrang")
                
//             }
//             // đc click sẽ thành .mautrang
//             this.classList.toggle("mautrang");
//             //lấy về data-hiện lên
//             var ndhienra = this.getAttribute("data-hienlen");
//             var phan_tu_hien_ra = document.getElementById(ndhienra);
//             // cho tất cả .danhsach mất đi
//             for (var i= 0;i < nd.length; i++) {
//                 nd[i].classList.remove('xuathien');
                
//             }
//             // đc click sẽ .xuathien
//             phan_tu_hien_ra.classList.toggle('xuathien');
//         }
        
//     }


// },false)

document.addEventListener("DOMContentLoaded",function(){

    var nut= document.getElementsByClassName("declick");
    var nd = document.getElementsByClassName("danhsach");
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            if(this.classList[1] == "mautrang") //click vào cái đã hiện rồi
            {  
                this.classList.remove('mautrang');
                var ndhienra = this.getAttribute("data-hienlen");
                var phan_tu_hien_ra = document.getElementById(ndhienra);
                phan_tu_hien_ra.classList.remove('xuathien');
                

            }
            else{ //click vào các cái còn lại 
                            // cho tất cả .mautrang mất đi
                for (k= 0; k< nut.length; k++) {
                    nut[k].classList.remove("mautrang")
                    
                }
                // đc click sẽ thành .mautrang
                this.classList.toggle("mautrang");
                //lấy về data-hiện lên
                var ndhienra = this.getAttribute("data-hienlen");
                var phan_tu_hien_ra = document.getElementById(ndhienra);
                // cho tất cả .danhsach mất đi
                for (var i= 0;i < nd.length; i++) {
                    nd[i].classList.remove('xuathien');
                    
                }
                // đc click sẽ .xuathien
                phan_tu_hien_ra.classList.toggle('xuathien');

            }

        }
    }
        


},false)



