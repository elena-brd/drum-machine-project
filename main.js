function playDrum(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    setTimeout(() => {
        key.classList.remove('playing');
    }, 200)

}

window.addEventListener('keydown', playDrum);