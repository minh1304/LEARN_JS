document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh img'),
        black = document.querySelector('.black');
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function(){
            console.log(this);
            black.classList.add('show')

        })

        
    }

},false)