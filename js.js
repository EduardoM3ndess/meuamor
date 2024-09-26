var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

function playAudio() {
  if (audio.paused) {
    audio.play();  // Toca o áudio se estiver pausado
    playButton.setAttribute('name', 'pause-outline'); // Troca o ícone para pause
  } else {
    audio.pause(); // Pausa o áudio se estiver tocando
    playButton.setAttribute('name', 'play-outline'); // Troca o ícone de volta para play
  }
}
