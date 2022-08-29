document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black'),
        info_img = document.querySelector('.info_img')
        close = document.querySelector('.black .close');
    console.log(close);
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function(){
            console.log(this);
            black.classList.add('show');
            info_img.classList.add('show');
            close.addEventListener('click',function (){
                black.classList.remove('show');
                info_img.classList.remove('show');
            })
            black.addEventListener('click',function (){
                black.classList.remove('show');
                info_img.classList.remove('show');
            })
        })

        
    }

},false)