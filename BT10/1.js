document.addEventListener("DOMContentLoaded",function(){
    var img = document.querySelectorAll('.cacanh');
    for (var i = 0; i < img.length; i++) {
        img.addEventListener('click',function(){
            console.log(this);
        })

        
    }

},false)