document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black'),
        info_img = document.querySelector('.info_img'),
        block_img = document.querySelectorAll('.block_img ul li'),

        thuTuCuaActive = 0,
        click_nextImg = document.querySelector('.b_right'),
        click_PreVImg = document.querySelector('.b_left'),
        // click_previousImg
        close = document.querySelector('.black .close');
    

    close.addEventListener('click',function (){
        black.classList.remove('show');
        info_img.classList.remove('show');
        var anhActive = document.querySelector('.block_img ul li.active ');
        anhActive.classList.remove('active');
    })
    
    black.addEventListener('click',function (){
        black.classList.remove('show');
        info_img.classList.remove('show');
        var anhActive = document.querySelector('.block_img ul li.active ');
        anhActive.classList.remove('active');
    })

    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function(){
            black.classList.add('show');
            info_img.classList.add('show');
            var imgClick = this;
            var chiSo = 0 ;
            for(chiSo;imgClick=imgClick.previousElementSibling;chiSo++) {}
            thuTuCuaActive = chiSo;
            block_img[chiSo].classList.add('active');


        })
  
    }


    var thuTuCuaHienTai = thuTuCuaActive;
    click_nextImg.addEventListener('click',function(){

        console.log(thuTuCuaHienTai);
        var soLuongAnh = block_img.length;
        var phanTuHienTai = block_img[thuTuCuaHienTai];

        
        console.log(thuTuCuaHienTai);

        thuTuCuaHienTai = (thuTuCuaHienTai < (soLuongAnh- 1) ) ? (thuTuCuaHienTai +1 ): (0);
        var phanTuTiepTheo = block_img[thuTuCuaHienTai];
        console.log(thuTuCuaHienTai);
        phanTuHienTai.classList.remove('active');
        phanTuTiepTheo.classList.add('active');



    })
    click_PreVImg.addEventListener('click',function(){

        console.log(thuTuCuaHienTai);
        var soLuongAnh = block_img.length;
        var phanTuHienTai = block_img[thuTuCuaHienTai];

        
        console.log(thuTuCuaHienTai);

        thuTuCuaHienTai = (thuTuCuaHienTai > 0 ) ? (thuTuCuaHienTai - 1 ): (soLuongAnh- 1);
        var phanTuTiepTheo = block_img[thuTuCuaHienTai];
        console.log(thuTuCuaHienTai);
        phanTuHienTai.classList.remove('active');
        phanTuTiepTheo.classList.add('active');



    })


},false)