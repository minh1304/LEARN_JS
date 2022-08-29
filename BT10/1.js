document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black'),
        info_img = document.querySelector('.info_img'),
        block_img = document.querySelectorAll('.block_img ul li')
        close = document.querySelector('.black .close');
    console.log(close);
    console.log(block_img);
    close.addEventListener('click',function (){
        black.classList.remove('show');
        info_img.classList.remove('show');
    })
    
    black.addEventListener('click',function (){
        black.classList.remove('show');
        info_img.classList.remove('show');
    })
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function(){
            console.log(this);
            black.classList.add('show');
            info_img.classList.add('show');
            var imgClick = this;
            var chiSo = 0 ;
            for(chiSo;imgClick=imgClick.previousElementSibling;chiSo++) {}
            console.log(block_img[chiSo]);
            block_img[chiSo].classList.add('active');
        })

        
    }

},false)