// Recupero elementi

const title = document.getElementById('title')
const numbersContainer = document.getElementById('cpu-numbers')
const countdownElement = document.getElementById('countdown')
const formElement = document.getElementById('form')
const firstNumberInput = document.getElementById('first-input')
const secondNumberInput = document.getElementById('second-input')
const thirdNumberInput = document.getElementById('third-input')
const fourthNumberInput = document.getElementById('fourth-input')
const fifthNumberInput = document.getElementById('fifth-input')
const resultElement = document.getElementById('guessed-numbers')

// Variabili iniziali

const totalNumbers = 5;
let seconds = 5;

countdownElement.innerText = seconds;
title.innerText = 'Hai 30 secondi per memorizzare questi numeri';

// Creo le mie funzioni

const createNumberContainer = () => {
    const numberContainer = document.createElement('div')
    numberContainer.className = `w-25 text-center fw-bold fs-1`

    return numberContainer
    
};


for (let i = 1; i <= totalNumbers; i++) {

    let randomNumber = Math.floor(Math.random()*100)+1

    const cpuNumberContainer = createNumberContainer()
    numbersContainer.appendChild(cpuNumberContainer)
    cpuNumberContainer.innerText = randomNumber

};

const countdown = setInterval(()=>{
    countdownElement.innerText = --seconds;
    if(seconds === 0){
        clearInterval(countdown);
        numbersContainer.classList.add('d-none')
        formElement.classList.remove('d-none')
        countdownElement.classList.add('d-none')
        title.innerText = 'Te li ricordi? Inserisci ogni numero in una casella'
    }
}, 1000);





