function AudioPlayer(AudioName) {

    const audio = new Audio();

    audio.src = "/files/audio/" + AudioName
    audio.play()
}

function CialloAudioPlayer() {
    const min = 0;
    const max = 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomNum === 0){
        AudioPlayer("meguru_ciallo.mp3")
    } else if(randomNum === 1 && randomNum <= 7){
        AudioPlayer("yoshino_ciallo.mp3")
    }
}

//Ciallo～(∠・ω< )⌒★