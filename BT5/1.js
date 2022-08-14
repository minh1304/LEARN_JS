document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelector('.nut'),
        menutrai = document.querySelector('.menutrai'),
        black = document.querySelector('.black');
        khoito = document.querySelector('.content');
    nut.onclick = function(){
        black.classList.add('len');
        khoito.classList.add('dichphai');
    }
    black.onclick = function(){
        black.classList.remove('len');
        khoito.classList.remove('dichphai');

    }

},false)