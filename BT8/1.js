document.addEventListener("DOMContentLoaded",function(){
    var click = document.querySelectorAll(".chuyenslide ul li");
    var slides = document.querySelectorAll(".cacslide ul li")

    autoslide();

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

    function autoslide() {
        var thoigian = setInterval(function(){
            var slidehientai = document.querySelector('.cacslide ul li.active');
            var vitrislide = 0;
            for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide ++) {}

            if (vitrislide < (slides.length - 1 ))
            {
                for(var i =0 ; i <slides.length; i++)
                {
                    slides[i].classList.remove('active');
                    click[i].classList.remove('kichhoat');
                    
                }
                slides[vitrislide].nextElementSibling.classList.add('active');
                click[vitrislide].nextElementSibling.classList.add('kichhoat');
                // console.log("vi tri slide hien tai la " + vitrislide);
            }
            else
            {
                
                for(var i =0 ; i <slides.length; i++)
                {
                    slides[i].classList.remove('active');
                    click[i].classList.remove('kichhoat');
                    
                }
                slides[0].classList.add('active');
                // console.log("vi tri slide hien tai la " + vitrislide);
            }



        },5000)
    }


},false)