

function spilleTromme(evt) {
    const tastekode = evt.keyCode;

    const lyd = document.querySelector(`audio[data-key="${tastekode}"]`)
    
    //hivs ikke lyd - avslutt funksjonen
    if(!lyd) {
        return;
    }

    lyd.currentTime=0;
    lyd.play();

    const divElement = document.querySelector(`main div[data-key="${tastekode}"]`)

    divElement.animate([
        { backgroundColor: "red", transform: "scale(1.2)"},
        { backgroundColor: "transparent", transform: "scale(1.0)"}
    ], 300);
}

document.addEventListener("keydown",spilleTromme)