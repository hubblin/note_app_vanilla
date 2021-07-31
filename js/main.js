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
        gsap.to(plusBtn, .5, {
            top: -20,
            esae: Power1.easeOut
        })
        gsap.to(plusBtn, .5, {
            delay: .5,
            top: 0,
            ease: Bounce.easeOut
        })
        gooeyEls.forEach(function(gooeyEl, index){
            gsap.to(gooeyEl, 1, {
                top: 60
            })
            gsap.to(gooeyEl, {
                delay: 1,
                duration: index * .8,
                top: 60+ index * 30,
                ease: Back.easeOut.config(2)
            })
        })        

    }else{
        gsap.to(plusBtn, .4, {
            rotate: 0
        })
        gooeyEls.forEach(function(gooeyEl, index){
            gsap.to(gooeyEl, .8, {
                delay: index * .3,
                top: 0
            })
        })
    }
})