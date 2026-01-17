function AudioPlayer(AudioName) {

    const audio = new Audio();

    audio.src = "/files/audio/" + AudioName
    audio.play();
}

function CialloAudioPlayer() {
    var min = 0; var max = 15; var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(randomNum <= 3){
        AudioPlayer("meguru_ciallo.mp3");
    } else if(randomNum >= 4 && randomNum <= 7){
        AudioPlayer("yoshino_ciallo.mp3");
    } else if(randomNum >= 8 && randomNum <= 11){
        AudioPlayer("mayu_ciallo.mp3");
    } else if(randomNum >= 12){
        AudioPlayer("fumika_ciallo.mp3");
    }
}

//Ciallo～(∠・ω< )⌒★