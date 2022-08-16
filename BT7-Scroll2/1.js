document.addEventListener("DOMContentLoaded",function(){
    var menudo = document.querySelector('.menu');
    var trangthaimenudo = "duoi150";
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
    })

},false)