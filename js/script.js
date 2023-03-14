const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]

const slider = document.querySelector('.slider');

let slide = '';

let index = 0;

for(let i = 0; i < images.length; i++){
    slide += 
    `
        <div class="slide">
            <img src="./img/${images[i]}" alt="${i}">
        </div>
    `;
}

slider.innerHTML += slide;

document.querySelectorAll('.slide')[index].classList.add('active');

back = document.getElementById('goBack');
next = document.getElementById('goNext');

back.addEventListener('click', function(){
    document.querySelectorAll('.slide')[index].classList.remove('active');
    if(index == 0){
        index = images.length - 1;
    } else{
        index --;
    }
    document.querySelectorAll('.slide')[index].classList.add('active');
})

next.addEventListener('click', function(){
    document.querySelectorAll('.slide')[index].classList.remove('active');
    if(index == images.length - 1){
        index = 0;
    } else{
        index ++;
    }
    document.querySelectorAll('.slide')[index].classList.add('active');
})