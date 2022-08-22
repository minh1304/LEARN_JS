document.addEventListener("DOMContentLoaded",function(){

    var nutPhai = document.querySelector('.nut b.phai'),
        nutTrai = document.querySelector('.nut b.trai'),
        slides = document.querySelectorAll('.slides ul li'),
        chiSoHientai = 0,
        soLuongSlide =  slides.length;

    var trangthai = 'dungYen';
    //bắt sự kiện click vào nút phải 
    var chuyenSlideChoNutPhai = function(){
        //Để kh bị lag khi click nhiều
        if(trangthai == 'dangChuyenDong')
        {
            return false;
        }
        trangthai ='dangChuyenDong';
        var checktrangthai = 0;
        var phanTuHienTai = slides[chiSoHientai];
        //xác định chỉ số tiếp theo dựa trên hiện tại
        if (chiSoHientai < soLuongSlide - 1){
            chiSoHientai++;
        }
        else
        {
            chiSoHientai = 0;  
        }

        var phanTuTiepTheo = slides[chiSoHientai];

        var xuLyHienTaiketThucCD = function () {
            // this là phantuhientai
            this.classList.remove('dangxem');
            this.classList.remove('bienMatKhiAnNext');
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}

        }

        var xuLyTiepTheoketThucCD = function () {
            // this là phantuTieptheo
            this.classList.remove('xuatHienKhiAnNext');
            this.classList.add('dangxem');
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}
        }



        //check chuyển động kết thúc 
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiketThucCD);
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoketThucCD);
        //tạo chuyển động sau khi xác định 
        phanTuHienTai.classList.add('bienMatKhiAnNext');
        phanTuTiepTheo.classList.add('xuatHienKhiAnNext');

    };
    var chuyenSlideChoNutTrai = function(){
        //Để kh bị lag khi click nhiều
        if(trangthai == 'dangChuyenDong')
        {
            return false;
        }
        trangthai ='dangChuyenDong';
        var checktrangthai = 0;
        var phanTuHienTai = slides[chiSoHientai];
        //xác định chỉ số tiếp theo dựa trên hiện tại
        if (chiSoHientai > 0){
            chiSoHientai--;
        }
        else
        {
            chiSoHientai =  soLuongSlide - 1;  
        }

        var phanTuTiepTheo = slides[chiSoHientai];

        var xuLyHienTaiketThucCD = function () {
            // this là phantuhientai
            this.classList.remove('dangxem');
            this.classList.remove('bienMatKhiAnNext');
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}

        }

        var xuLyTiepTheoketThucCD = function () {
            // this là phantuTieptheo
            this.classList.remove('xuatHienKhiAnNext');
            this.classList.add('dangxem');
            checktrangthai ++;
            if(checktrangthai == 2) {trangthai='dungYen'}
        }



        //check chuyển động kết thúc 
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiketThucCD);
        phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoketThucCD);
        //tạo chuyển động sau khi xác định 
        phanTuHienTai.classList.add('bienMatKhiAnNext');
        phanTuTiepTheo.classList.add('xuatHienKhiAnNext');

    };
    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);
    nutTrai.addEventListener('click', chuyenSlideChoNutTrai);


},false)