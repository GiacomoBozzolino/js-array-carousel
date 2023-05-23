console.log ('main loaded');

// array contenente le immagini
let images = [ 'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg',
];

console.log(images);


let sliderElement = document.querySelector('.slider');
let sliderContent = '';



// ciclo for per caricare dinamicamente le immagini
for( let i = 0; i < images.length; i++){

    let currentImage = images[i];

    sliderContent +=`
    <div class="slide active">
    <img src="${currentImage}">
    </div>`

    

}

console.log(sliderContent)