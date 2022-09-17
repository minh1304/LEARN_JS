const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $('.cd');
const heading= $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player')

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "./assets/music/Click Pow Get Down-Raftaar -VlcMusic.CoM.mp3",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./assets/music/Tu Phir Se Aana-Raftaar -VlcMusic.CoM.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path: "./assets/music/Naachne Ka Shaunq-Brodha V-VlcMusic.CoM.mp3",          
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "Mantoiyat",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./assets/music/Mantoiyat-Raftaar -VlcMusic.CoM.mp3",          
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "./assets/music/Aage Chal-Raftaar -VlcMusic.CoM.mp3",          
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path: "./assets/music/Damn - Raftaar-(MastiMusic.Com).mp3",          
          image:
            "https://i.scdn.co/image/ab67616d0000b273441105b2aed66a31a869299f"
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "./assets/music/Feeling You (Mr Nair)-Raftaar -VlcMusic.CoM.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer  }</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })

    },
    handelEvent: function() {
        const _this = this;

        const cdWidth = cd.offsetWidth; //console({cd})


        //Xử lý phogn1 to thu nhỏ
        document.onscroll = function() { 
            const scrollTop = document.documentElement.scrollTop ||window.scrollY
            const newCdwidth = cdWidth - scrollTop ;
            cd.style.width = newCdwidth >0 ? newCdwidth + 'px' : 0;
            cd.style.opacity = newCdwidth / cdWidth;

        }
        //Xử lý khi click play 
        playBtn.onclick = function() {
            if(_this.isPlaying)
            {
                _this.isPlaying = false;
                audio.pause();
                player.classList.remove('playing');

            } 
            else{
                _this.isPlaying = true;
                audio.play();
                player.classList.add('playing');
            }

        }
  
    },
    loadCurrentSong: function() {

        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        console.log(audio);
    },
    start: function() {
        //Định nghĩa thuộc tính cho object
        this.defineProperties()
        //Lắng nghe các sự kiện
        this.handelEvent()
        //tải bài hát đầu tiên
        this.loadCurrentSong()
        this.render()

    }
    
}
app.start()
