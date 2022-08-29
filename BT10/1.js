document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black'),
        info_img = document.querySelector('.info_img'),
        block_img = document.querySelectorAll('.block_img ul li'),
        // thuTuCuaActive = 0,
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
            // console.log(thuTuCuaActive);
            thuTuCuaActive = chiSo

        })
  
    }

    console.log(thuTuCuaActive);
    click_nextImg.addEventListener('click',function(){
        close.addEventListener('click',function (){
            black.classList.remove('show');
            info_img.classList.remove('show');
            phanTuHientai.classList.remove('active');
        })
        
        black.addEventListener('click',function (){
            black.classList.remove('show');
            info_img.classList.remove('show');
            phanTuHientai.classList.remove('active');
        })

        /// 
        console.log(hienTai2);


        var phanTuHientai = block_img[hienTai2];
        hienTai2 = (hienTai2 < block_img.length -1) ? hienTai2 + 1 : 0;
        var phantuTiepTheo = block_img[hienTai2];
        phanTuHientai.classList.remove('active');
        phantuTiepTheo.classList.add('active');

        console.log(phanTuHientai);



    })



},false)