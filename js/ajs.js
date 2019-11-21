const vietos = document.querySelector('#cia');

function addElement () {
    for (let i = 0; i < 16; i++) {

        const vieta = document.createElement('div');
        vietos.appendChild(vieta);
    }
}
addElement();


function random(number){
    return Math.floor(Math.random()*number);
}

function atsitiktinis(){
    let rndColor = 'rgb(' + random(255) +','+random(255)+','+random(255)+')';
    return rndColor;
}

let divs = document.querySelectorAll('div');

for(let i=0; i < divs.length; i++){
    divs[i].onclick = function (e) {

        e.target.style.backgroundColor = atsitiktinis();
       // console.log(e.target)
    }
}
