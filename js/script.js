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
let seconds = 1;

countdownElement.innerText = seconds;
title.innerText = 'Hai 30 secondi per memorizzare questi numeri';

// Creo le mie funzioni

const createNumberContainer = () => {
    const numberContainer = document.createElement('div')
    numberContainer.className = `w-25 text-center fw-bold fs-1`

    return numberContainer
    
};



let cpuNumbers = []


for (let i = 1; i <= totalNumbers; i++) {

    let randomNumber = Math.floor(Math.random()*100)+1

    const cpuNumberContainer = createNumberContainer()
    numbersContainer.appendChild(cpuNumberContainer)
    cpuNumberContainer.innerText = randomNumber
    cpuNumbers.push(randomNumber)
};





console.log(cpuNumbers)
// Creato countdown

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

    

formElement.addEventListener('submit', (e) => {
    e.preventDefault()



    let numbers = []

    let firstNumber = parseInt(firstNumberInput.value)
    let secondNumber = parseInt(secondNumberInput.value)
    let thirdNumber = parseInt(thirdNumberInput.value)
    let fourthNumber = parseInt(fourthNumberInput.value)
    let fifthNumber = parseInt(fifthNumberInput.value)

    for(let i = 0; i<cpuNumbers.length; i++){

        if(firstNumber === cpuNumbers[i]){
           
            numbers.push(cpuNumbers[i])
            formElement.classList.add('d-none')
            title.classList.add('d-none')

        } else if (secondNumber === cpuNumbers[i]){
            
            numbers.push(cpuNumbers[i])
            formElement.classList.add('d-none')
            title.classList.add('d-none')

        } else if (thirdNumber === cpuNumbers[i]){
            
            numbers.push(cpuNumbers[i])
            formElement.classList.add('d-none')
            title.classList.add('d-none')

        } else if (fourthNumber === cpuNumbers[i]){
            
            numbers.push(cpuNumbers[i])
            formElement.classList.add('d-none')
            title.classList.add('d-none')

        } else if (fifthNumber === cpuNumbers[i]){
            
            numbers.push(cpuNumbers[i])
            formElement.classList.add('d-none')
            title.classList.add('d-none')
        }

    
    }

    resultElement.classList.remove('d-none')


    if (numbers.length === 0){
        resultElement.innerText = 'Non hai indovinato nessun numero'
        formElement.classList.add('d-none')
        title.classList.add('d-none')
    } else {
        resultElement.innerText = `Hai indovinato ${numbers.length} numeri: ${numbers}`
    }
    
    
    



})













