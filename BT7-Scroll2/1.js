document.addEventListener("DOMContentLoaded",function(){
    var trangthai ='duoi300'; //kh cần cũng đc 
    
    var menu = document.querySelector('.menu');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >300){
            if (trangthai=='duoi300') {
                trangthai="tren300";
                menu.classList.add('nholai');
                
            }

        }
        else if(window.pageYOffset <=300)
        {
            if(trangthai="tren300")
            {
                menu.classList.remove('nholai');
                trangthai="duoi300";
            }
        }
    })

},false)