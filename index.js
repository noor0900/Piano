window.addEventListener('keypress', (e) => {
    const keycode = event.keyCode;
    const keyCode = e.keyCode;

let btn = undefined;
const audio = document.querySelector(`audio[data-key="${keyCode}"]`);


if (keycode >= 97 && keycode <= 121) {
    btn = document.querySelector(`button[data-key="${keyCode}"]`);

}
if (keycode >= 97 && keycode <= 121) {
    btn = document.querySelector(`button[data-key="${keyCode}"]`);

}
if (audio) {
    audio.play();
    btn.classList.add("press");
    setTimeout(() => {  
        btn.classList.remove("press");
    },600);
}
});
