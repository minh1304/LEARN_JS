document.addEventListener("DOMContentLoaded",function(){
    var click = document.querySelectorAll("li");
    var slides = document.querySelectorAll(".cacslide ul li")
    // console.log(slides);
for (var i = 0; i < click.length; i++) {
    click[i].addEventListener('click',function(){
        for (var i = 0; i < click.length; i++) {
            click[i].classList.remove('kichhoat');
        }

        this.classList.add('kichhoat');

        // Hàm tính vị trí nút
        var nutkichhoat = this ;
        for(var vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling;vitrinut++)
        {

        }
        for(var i =0 ; i < slides.length; i++)
        {
            slides[i].classList.remove('active');
            slides[vitrinut].classList.add('active');
        }


        // for (var i = 0; i < slides.length; i++) {
        //     slides[i].classList.remove('active');


            
        // }

    })
}

},false)