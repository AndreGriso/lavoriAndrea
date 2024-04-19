const arrayEl = document.getElementById("array");
const risultato = document.querySelector(".arrayRisultato");
var arrayEls = document.querySelectorAll(".arrayCaselle");


function random(){
    for(i=0; i<arrayEls.length; i++){
        arrayEls[i].value = Math.floor(Math.random() * 100);
    };
    setAEls();
}

function decrescente(){
    setAEls();
    a.sort(function(a, b){return a - b});
    setArrayEl();
}

function crescente(){
    setAEls();
    a.sort(function(a, b){return b - a});
    setArrayEl();
}

function reverse(){
    setAEls();
    a.reverse();
    setArrayEl();
}

function minimo() {
    setAEls();
    risultato.innerHTML = "";
    let min = a[0];
    let minIndex = 0;
    for(i=1; i<a.length; i++){
        if(min > a[i]){
            min = a[i];
            minIndex = i;
        }
    }
    risultato.innerHTML = `
        <h3>Numero minimo: ${min}</h3>
        <h3>Indice: ${minIndex}</h3>
        `
}

function massimo() {
    setAEls();
    risultato.innerHTML = "";
    let max = a[0];
    let maxIndex = 0;
    for(i=1; i<a.length; i++){
        if(max < a[i]){
            max = a[i];
            maxIndex = i;
        }
    }
    risultato.innerHTML = `
        <h3>Numero massimo: ${max}</h3>
        <h3>Indice: ${maxIndex}</h3>
        `
}

function setAEls(){
    a = [];
    for(i=0; i<arrayEls.length; i++)
        a.push(arrayEls[i].value);
}

function setArrayEl(){
    for(i=0; i<a.length; i++)
        arrayEls[i].value = a[i];
}