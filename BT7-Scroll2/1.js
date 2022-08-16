document.addEventListener("DOMContentLoaded",function(){
    var menudo = document.querySelector('.menu');
    var trangthaimenudo = "duoi150";
    var quangcao = document.querySelector('.quangcao');
    var vitriqc = quangcao.offsetTop; 
    var vitriqccuoi = vitriqc + 700;
    // console.log(vitriqc);
    var trangthaiqc = "duoi";
    window.addEventListener('scroll',function(){
        // console.log(window.pageYOffset);
        if(this.window.pageYOffset > 150)
        {
            if (trangthaimenudo == "duoi150")
            {
                trangthaimenudo = "tren150";
                menudo.classList.add('menuden');

            }

            
        }
        else if(this.window.pageYOffset < 150)
        {
            if (trangthaimenudo == "tren150")
            {
                trangthaimenudo = "duoi150";
                menudo.classList.remove('menuden');

            }

        }
        
        //xu ly quang cao
        if( (this.window.pageYOffset > vitriqc )  && (this.window.pageYOffset < vitriqccuoi )) 
        {
            if(trangthaiqc=="duoi")
            {
                trangthaiqc = "danghienthi";
                quangcao.classList.add('hienqc');

            }   
        }
        else if ((this.window.pageYOffset < vitriqc ) || (this.window.pageYOffset > vitriqccuoi ))
        {
            if(trangthaiqc=="danghienthi")
            {
                trangthaiqc = "duoi";
                quangcao.classList.remove('hienqc');

            }  
        }


    })




},false)