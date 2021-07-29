const btnEl = document.querySelector('#btn');
const container = document.querySelector('.color_selector');
const plusBtn = document.querySelector('.gooey.material-icons');

let hide = false;
plusBtn.addEventListener('click', function(){
    hide = !hide;
    if(hide){
        container.classList.add('a');
        gsap.to(plusBtn, .4, {
            rotate: 360
        })
    }else{
        container.classList.remove('a');
        gsap.to(plusBtn, .4, {
            rotate: 0
        })
    }
})