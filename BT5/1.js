document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('.nut'),
        menutrai = document.querySelector('.menutrai'),
        black = document.querySelector('.black'),
        khoito = document.querySelector('.content'),
        trang = document.querySelector('.mautrang');
    nut.onclick = function(){
        black.classList.add('len');
        // khoito.classList.add('dichphai');
        trang.classList.add('trangquay');
        menutrai.classList.remove('vetrai');
    }
    black.onclick = function(){
        black.classList.remove('len');
        khoito.classList.remove('dichphai');
        trang.classList.remove('trangquay');
        menutrai.classList.add('vetrai');


    }

},false)