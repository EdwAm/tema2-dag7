// javascript
//let poeng = 0;
const theBird = document.querySelector("#theBird");
const main = document.querySelector("main");

//fuglens y-posisjon
let ypos = 100;
let fart = 3;
let flaksekraft = 10;
let g = 0.2;
let bakgrunnsfart = -3;
let bakgrunnspos = 0;

//så lenge denne er true, så skal vi kjøre spillet
let theGameIsOn = true;

function flyttBakgrunn(){
    bakgrunnspos += bakgrunnsfart;
    main.style.backgroundPosition = `${bakgrunnspos}px 0`;
}

//fuglen flakser
function flaks(){
    fart = -flaksekraft;
}

document.addEventListener("click", flaks);

//flytte fuglen nedover
function fallNed(){
    fart += g;
    ypos += fart;
    theBird.style.top = ypos + "px";
    theBird.style.transform = `rotate(${fart*2}deg)`;
}

function sjekkOmFuglenTrefferBakken() {
    if(ypos > 757) {
        theGameIsOn = false;
    }
    if(ypos < 5) {
        theGameIsOn = false;
    }
}

function gameLoop() {
    //poeng++;
    //console.log(poeng);
    fallNed();
    flyttBakgrunn();
    sjekkOmFuglenTrefferBakken();
    if(theGameIsOn) {
        requestAnimationFrame(gameLoop);
    }
}


//starte loopen en gang 
gameLoop();
