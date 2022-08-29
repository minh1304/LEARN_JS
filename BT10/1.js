document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black'),
        info_img = document.querySelector('.info_img'),
        block_img = document.querySelectorAll('.block_img ul li'),
        thuTuCuaActive = 0,
        click_nextImg = document.querySelector('.b_right'),
        // click_previousImg
        close = document.querySelector('.black .close');
    
    console.log(click_nextImg);
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function(){
            black.classList.add('show');
            info_img.classList.add('show');
            var imgClick = this;
            var chiSo = 0 ;
            for(chiSo;imgClick=imgClick.previousElementSibling;chiSo++) {}
            thuTuCuaActive = chiSo
            block_img[chiSo].classList.add('active');
            close.addEventListener('click',function (){
                black.classList.remove('show');
                info_img.classList.remove('show');
                block_img[chiSo].classList.remove('active');
            })
            
            black.addEventListener('click',function (){
                black.classList.remove('show');
                info_img.classList.remove('show');
                block_img[chiSo].classList.remove('active');
            })

        })

        
    }

    click_nextImg.addEventListener('click',function(){
        console.log(thuTuCuaActive);
        for (var i = 0; i < img.length; i++) {
            
        }


    })


},false)