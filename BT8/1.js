document.addEventListener("DOMContentLoaded",function(){
    var click = document.querySelectorAll("li");
for (var i = 0; i < click.length; i++) {
    click[i].addEventListener('click',function(){
        for (var i = 0; i < click.length; i++) {
            click[i].classList.remove('kichhoat');
        }

        this.classList.add('kichhoat');

    })
}

},false)