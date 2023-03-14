const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]

const slider = document.querySelector('.slider');
const aside = document.querySelector('.aside');

let slide = '';
let card = '';
let index = 0;

for(let i = 0; i < images.length; i++){
    slide += 
    `
        <div class="slide">
            <img src="./img/${images[i]}" alt="${i}">
        </div>
    `;
    card += 
    `
        <div class="card">
            <img src="./img/${images[i]}" alt="${i}">
        </div>
    `;
}

slider.innerHTML += slide;
aside.innerHTML += card;

document.querySelectorAll('.slide')[index].classList.add('active');
document.querySelectorAll('.card')[index].classList.add('opacity');

back = document.getElementById('goBack');
next = document.getElementById('goNext');

back.addEventListener('click', function(){
    document.querySelectorAll('.slide')[index].classList.remove('active');
    document.querySelectorAll('.card')[index].classList.remove('opacity');
    if(index == 0){
        index = images.length - 1;
    } else{
        index --;
    }
    document.querySelectorAll('.slide')[index].classList.add('active');
    document.querySelectorAll('.card')[index].classList.add('opacity');
})

next.addEventListener('click', function(){
    document.querySelectorAll('.slide')[index].classList.remove('active');
    document.querySelectorAll('.card')[index].classList.remove('opacity');
    if(index == images.length - 1){
        index = 0;
    } else{
        index ++;
    }
    document.querySelectorAll('.slide')[index].classList.add('active');
    document.querySelectorAll('.card')[index].classList.add('opacity');
})