window.addEventListener('keypress', (e) => {
    const keycode = e.keyCode;

    let btn = undefined;
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);


    if (keycode >= 97 && keycode <= 121) {
        btn = document.querySelector(`button[data-key="${keycode}"]`);

    }
    if (keycode >= 97 && keycode <= 121) {
        btn = document.querySelector(`button[data-key="${keycode}"]`);

    }
    if (audio) {
        audio.play();
        btn.classList.add("press");
        setTimeout(() => {
            btn.classList.remove("press");
        }, 100);
    }
});
