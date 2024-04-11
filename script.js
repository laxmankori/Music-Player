let arr = [
  {
    name: "Pahle bhi main",
    url: "songs/Pehle Bhi Main(PagalWorld.com.cm).mp3",
    img: "images/animal.jpg",
  },
  {
    name: "Hua Main",
    url: "songs/01 - Hua Main (320 Kbps).mp3",
    img: "images/animal.jpg",
  },
  {
    name: "Satranga",
    url: "songs/02 - Satranga (320 Kbps).mp3",
    img: "images/animal.jpg",
  },
  {
    name: "Papa Meri Jaan",
    url: "songs/03 - Papa Meri Jaan (320 Kbps).mp3",
    img: "images/animal.jpg",
  },
  {
    name: "Arjan Vailly",
    url: "songs/04 - Arjan Vailly (320 Kbps).mp3",
    img: "images/animal2.jpg",
  },
  {
    name: "kaise Hua",
    url: "songs/Kaise Hua_192(Ghantalele.com).mp3",
    img: "images/kabir_singh.jpg",
  },
  {
    name: "Bekhayali ",
    url: "songs/Bekhayali_192(Ghantalele.com).mp3",
    img: "images/kabir_singh2.jpg",
  },
  {
    name: "Ram Siya Ram",
    url: "songs/Ram Siya Ram - Adipurush 320 Kbps.mp3",
    img: "images/ram.jpg",
  },
  {
    name: "Teri Baaton Mein Aisa Uljha Jiya",
    url: "songs/Teri Baaton Mein Aisa Uljha Jiya(PagalWorld.com.cm).mp3",
    img: "images/teri.jpg",
  },
  {
    name: "Laal Peeli Akhiyaan ",
    url: "songs/Laal Peeli Akhiyaan(PagalWorld.com.cm).mp3",
    img: "images/lal.jpg",
  },
];

let music = document.querySelector("#music-list");

let poster = document.querySelector(".pouse");

let playPouse = document.querySelector(".pouse-button");

let backword = document.querySelector(".left-button");

let forword = document.querySelector(".right-button");

let songname = document.querySelector(".songname");

var audio = new Audio();
var selectedSong = 0;

function mainFunction() {
  let clutter = "";

  arr.forEach(function (e, ind) {
    clutter += `<div class="list-box" id="${ind}">
    <div class="part-1">
    <div class="img">
        <img src=${e.img} alt="">
    </div>
    <div class="list-details">

        <p>${e.name}</p>
        <div class="duration">
            <p>2:00</p>
        </div>
    </div>
    </div>
    </div>`;
  });
  music.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

// play Function 

music.addEventListener("click", function (detail) {
  selectedSong = detail.target.id;
  mainFunction();
  document.getElementById(selectedSong).style.backgroundColor = "#191C2E";
  songname.innerHTML = `<h1>${arr[selectedSong].name}</h1>
  <p>2:00</p>
    `;
  playPouse.innerHTML = `<i class="fa-solid fa-pause">
  </i>`;
  flag = 1;
  audio.play();
});

// pouse function

let flag = 0;
playPouse.addEventListener("click", function (detail) {
    if (flag == 0) {
        playPouse.innerHTML = `<i class="fa-solid fa-pause">
        </i>`;
        mainFunction();
        audio.play();
        flag = 1;
    } else {
        playPouse.innerHTML = `<i class="fa-solid fa-play">
        </i>`;
        mainFunction();
        audio.pause();
        flag = 0;
    }
    document.getElementById(selectedSong).style.backgroundColor = "#191C2E";
    songname.innerHTML = `<h1>${arr[selectedSong].name}</h1>
  <p>2:00</p>
    `;
});

// forword function
let opacity = 0;
forword.addEventListener("click", function () {
  if (opacity == 0) {
      backword.style.opacity = 1;
    }
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        mainFunction();
        audio.play();
    playPouse.innerHTML = `<i class="fa-solid fa-pause">
    </i>`;
} else {
    forword.style.opacity = 0.5;
    opacity = 1;
  }
  flag = 1;
  document.getElementById(selectedSong).style.backgroundColor = "#191C2E";
  songname.innerHTML = `<h1>${arr[selectedSong].name}</h1>
  <p>2:00</p>
    `;
});

// backword function

backword.addEventListener("click", function () {
    if (opacity == 1) {
        forword.style.opacity = 1;
        opacity = 0;
    }
    if (selectedSong > 0) {
        selectedSong--;
        mainFunction();
        audio.play();
        playPouse.innerHTML = `<i class="fa-solid fa-pause">
        </i>`;
    } else {
        backword.style.opacity = 0.5;
  }
  flag = 0;
  document.getElementById(selectedSong).style.backgroundColor = "#191C2E";
  songname.innerHTML = `<h1>${arr[selectedSong].name}</h1>
  <p>2:00</p>
    `;
});
