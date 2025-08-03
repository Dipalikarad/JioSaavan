const audios = [
    new Audio("Jhoome Jo Pathaan - Pathaan 320 Kbps.mp3"),
    new Audio("Kesariya - Brahmastra 128 Kbps.mp3"),
    new Audio("Show Me The Thumka - Tu Jhoothi Main Makkar 320 Kbps.mp3"),
    new Audio("Raabta (Title Track) - Raabta 320 Kbps.mp3"),
    new Audio("Manike - Thank God 320 Kbps.mp3"),
    new Audio("Heeriye (feat. Arijit Singh) - Dulquer Salmaan 320 Kbps.mp3"),
    new Audio("Besharam Rang - Pathaan 320 Kbps.mp3"),
    new Audio("Satranga - Animal 320 Kbps.mp3"),
    new Audio("Bekhayali - Kabir Singh 320 Kbps.mp3"),
    new Audio("O Maahi - Dunki 320 Kbps.mp3"),
    new Audio("Malang Sajna - Sachet Tandon 320 Kbps.mp3"),
    new Audio("Billi Billi - Fazilpuria 320 Kbps.mp3"),
    new Audio("Raataan Lambiyan - Shershaah 320 Kbps.mp3"),
    new Audio("Chaleya - Jawan 320 Kbps.mp3"),
    new Audio("Aayi Nai - Stree 2 320 Kbps.mp3"),
    new Audio("Haste Haste - Phir Aayi Hasseen Dillruba 320 Kbps.mp3"),
    new Audio("Aaj Ki Raat - Stree 2 320 Kbps.mp3"),
    new Audio("Punjabi Munde - Ghudchadi 320 Kbps.mp3"),
    new Audio("Fire - Baali Cheema 320 Kbps.mp3"),
    new Audio("The Escape - Kalki 2898 Ad 320 Kbps.mp3"),
    new Audio("Kill (Kaawaa Kaawaa) - Kill 320 Kbps.mp3"),
    new Audio("Duur Na Karin - Khel Khel Mein 320 Kbps.mp3"),
    new Audio("Shaukan - Ulajh 320 Kbps.mp3"),
    new Audio("Hauli Hauli - De De Pyaar De 320 Kbps.mp3"),
    new Audio("Tauba Tauba - Bad Newz 320 Kbps.mp3"),
    new Audio("Khudaya - Sarfira 320 Kbps.mp3"),
    new Audio("Husn Irani - Wild Wild Punjab 320 Kbps.mp3"),
    new Audio("Maayane - Surya's Saturday (Hindi) (pagalall.com).mp3")
];
function pauseAll() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

audios.forEach((audio, index) => {
    const playBtn = document.querySelector(`.audio${index}`);
    const pauseBtn = document.querySelector(`.btn${index}`);

    if (playBtn) {
        playBtn.addEventListener("click", function () {
            pauseAll();
            audio.play();
        });
    }

    if (pauseBtn) {
        pauseBtn.addEventListener("click", function () {
            audio.pause();
        });
    }
});
