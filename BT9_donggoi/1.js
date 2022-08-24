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
            this.classList.remove('dangxem');
            this.classList.remove((nutnao=="nutTrai") ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}
        }   
        var xuLyTiepTheoketThucCD = function () {
            this.classList.remove((nutnao=="nutTrai") ? ('xuatHienKhiAnPrev') :('xuatHienKhiAnNext'));
            this.classList.add('dangxem');
            checktrangthai ++;
            trangthai = (checktrangthai==2) ? ('dungYen') : trangthai;
        }   
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiketThucCD);
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoketThucCD);    
        phanTuHienTai.classList.add(nutnao=="nutTrai" ? 'bienMatKhiAnPrev' : 'bienMatKhiAnNext' );
        phanTuTiepTheo.classList.add(nutnao=="nutTrai" ? 'xuatHienKhiAnPrev' :  'xuatHienKhiAnNext');     
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