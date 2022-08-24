document.addEventListener("DOMContentLoaded",function(){

    var nutPhai = document.querySelector('.nut b.phai'),
        nutTrai = document.querySelector('.nut b.trai'),
        slides = document.querySelectorAll('.slides ul li'),
        chiSoHientai = 0,
        soLuongSlide =  slides.length;
    var trangthai = 'dungYen';

    function xacDinh2SlideVaChuyenDong(nutnao){

        if(trangthai == 'dangChuyenDong'){return false;}
        trangthai ='dangChuyenDong';
        var checktrangthai = 0;
        var phanTuHienTai = slides[chiSoHientai];
        chiSoHientai = (nutnao=="nutTrai") ? (chiSoHientai = (chiSoHientai>0) ? (chiSoHientai - 1) : (soLuongSlide-1)) : (chiSoHientai = (chiSoHientai < soLuongSlide - 1) ? (chiSoHientai+1) : 0);
        var phanTuTiepTheo = slides[chiSoHientai];
        var xuLyHienTaiketThucCD = function () {
            // this là phantuhientai
            this.classList.remove('dangxem');

            if(nutnao=="nutTrai")
            {
                this.classList.remove('bienMatKhiAnPrev');
            }
            else if(nutnao=="nutPhai")
            {
                this.classList.remove('bienMatKhiAnNext');
            }

            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}

        }   
        var xuLyTiepTheoketThucCD = function () {


            if(nutnao=="nutTrai")
            {
                this.classList.remove('xuatHienKhiAnPrev');
            }
            else if(nutnao=="nutPhai")
            {
                this.classList.remove('xuatHienKhiAnNext');
            }

            this.classList.add('dangxem');
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}
        }   
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiketThucCD);
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoketThucCD);                  
        if (nutnao=="nutTrai")
        {
            phanTuHienTai.classList.add('bienMatKhiAnPrev');
            phanTuTiepTheo.classList.add('xuatHienKhiAnPrev');

        }
        else if(nutnao=="nutPhai")
        {
            phanTuHienTai.classList.add('bienMatKhiAnNext');
            phanTuTiepTheo.classList.add('xuatHienKhiAnNext');
        }
    }
    var chuyenSlideChoNutPhai = function(){
        xacDinh2SlideVaChuyenDong('nutPhai')
    }
    var chuyenSlideChoNutTrai = function(){
        xacDinh2SlideVaChuyenDong('nutTrai')
    }
    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);
    nutTrai.addEventListener('click', chuyenSlideChoNutTrai);
},false)