const container = document.querySelector('.color_selector');
const plusBtn = document.querySelector('.gooey.icons');
const gooeyEls = document.querySelectorAll('.gooey.el');

const listContainer = document.querySelector('.list_container');

// 사이드 부분

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

            gooeyEl.addEventListener('click', function(){
                let div = document.createElement('div');
                let innerDiv = document.createElement('div');
                let innerP = document.createElement('p');
                let innerBtn = document.createElement('div');
                let now = new Date();

                innerDiv.className = 'list_bottom';

                innerP.className = 'list-date';
                innerP.innerHTML = `${now.getMonth() + 1} . ${now.getDate()} . ${now.getFullYear()}`;
                
                innerBtn.className = 'material-icons edit';
                innerBtn.innerHTML = 'create';

                innerDiv.appendChild(innerP);
                innerDiv.appendChild(innerBtn);


                let textarea = document.createElement('textarea');
                let color = window.getComputedStyle(gooeyEl).backgroundColor;
                
                div.className = 'list';
                div.style.backgroundColor = color;
                div.appendChild(textarea);
                div.appendChild(innerDiv);

                listContainer.insertBefore(div, listContainer.firstChild);
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


// 메인 부분

