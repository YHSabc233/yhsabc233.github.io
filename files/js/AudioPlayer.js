function AudioPlayer(AudioName) {

    const audio = new Audio();

    audio.src = "/files/audio/" + AudioName
    audio.play()
}

function CialloAudioPlayer() {
    const min = 0;
    const max = 7;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomNum <= 3){
        AudioPlayer("meguru_ciallo.mp3")
    } else if(randomNum >= 4 && randomNum <= 7){
        AudioPlayer("yoshino_ciallo.mp3")
    }
}

//Ciallo～(∠・ω< )⌒★