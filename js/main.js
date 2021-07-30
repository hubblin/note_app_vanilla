const container = document.querySelector('.color_selector');
const plusBtn = document.querySelector('.gooey.icons');
const gooeyEls = document.querySelectorAll('.gooey.el');

let hide = false;
plusBtn.addEventListener('click', function(){
    hide = !hide;
    if(hide){
        gsap.to(plusBtn, .4, {
            rotate: 360
        });
        gooeyEls.forEach(function(gooeyEl, index){
            gsap.to(gooeyEl, 1, {
                delay: index * .3,
                top: 60+ index * 30
            })
        })        

    }else{
        gsap.to(plusBtn, .4, {
            rotate: 0
        })
        gooeyEls.forEach(function(gooeyEl, index){
            gsap.to(gooeyEl, .8, {
                top: 0
            })
        })
    }
})