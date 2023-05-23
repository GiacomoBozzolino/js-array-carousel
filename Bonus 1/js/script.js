"use strict";


console.log ('main loaded');

// array contenente le immagini
let images = [ './img/01.webp',
            './img/02.webp',
            './img/03.webp',
            './img/04.webp',
            './img/05.webp',
];

console.log(images);


let sliderElement = document.querySelector('.slider');
let sliderContent = '';



// ciclo for per caricare dinamicamente le immagini
for( let i = 0; i < images.length; i++){

    let currentImage = images[i];

    sliderContent +=`
        <div class="slide">
            <img src="${currentImage}">
        </div>`;
};

console.log(sliderContent);

sliderElement.innerHTML = sliderContent;

let slides = document.getElementsByClassName('slide');


// aggiungo la classe active all'elemento selezionato in modo che sia visibile sulla pagina
let activeElement = 0
 slides[activeElement].classList.add('active')

//  recupero dei pulsanti dall'html
 let prevButton = document.querySelector('.prev')
 let nextButton = document.querySelector('.next')


 nextButton.addEventListener('click', function(){
    if (activeElement < (images.length -1) ){
        slides[activeElement].classList.remove ('active')
        activeElement++;
        slides[activeElement].classList.add ('active')
        console.log('next')
    } else {
        slides[activeElement].classList.remove ('active')
        activeElement = 0;
        slides[activeElement].classList.add ('active')
        console.log('next')
    }
 })


 prevButton.addEventListener('click', function(){
    if (activeElement >0 ){
        slides[activeElement].classList.remove ('active')
    activeElement--;
    slides[activeElement].classList.add ('active')
    
    console.log('prev')
    } else {
        slides[activeElement].classList.remove ('active')
        activeElement = (images.length -1);
        slides[activeElement].classList.add ('active')
        console.log('next')

    }
    
 })



