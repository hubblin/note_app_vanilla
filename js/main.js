const container = document.querySelector('.color_selector');
const plusBtn = document.querySelector('.gooey.icons');
const gooeyEls = document.querySelectorAll('.gooey.el');

const listContainer = document.querySelector('.list_container');

// 사이드 부분

let hide = false;
let div, innerDiv, innerP, innerBtn, now;
let cnt =1;
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

            

            gooeyEl.addEventListener('click', listEvent)
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
            gooeyEl.removeEventListener('click', listEvent)
        })
    }
})


function listEvent(event){
    div = document.createElement('div');
    innerDiv = document.createElement('div');
    innerP = document.createElement('p');
    innerBtn = document.createElement('div');
    now = new Date();

    innerDiv.className = 'list_bottom';

    innerP.className = 'list-date';
    innerP.innerHTML = `${now.getMonth() + 1} . ${now.getDate()} . ${now.getFullYear()}`;
    
    innerBtn.className = 'material-icons edit';
    innerBtn.innerHTML = 'create';
    innerBtn.setAttribute('onclick', 'edit(' + cnt + ")");

    innerDiv.appendChild(innerP);
    innerDiv.appendChild(innerBtn);


    let textarea = document.createElement('textarea');
    textarea.setAttribute('disabled', 'true');
    let color = window.getComputedStyle(event.target).backgroundColor;
    
    div.className = 'list';
    div.setAttribute('id', 'the'+cnt);
    div.style.backgroundColor = color;
    div.appendChild(textarea);
    div.appendChild(innerDiv);

    listContainer.insertBefore(div, listContainer.firstChild);
    cnt++;
}



// 메인 부분

function edit(cnt){
    let getlist = document.getElementById('the' + cnt);
    let innerTextarea = document.querySelector(`#the${cnt} textarea`);
    let innerListBtn = document.querySelector(`#the${cnt} .edit`);

    innerTextarea.addEventListener('focus', function(){
        getlist.classList.add('focused');
    });

    innerTextarea.addEventListener('blur', function(){
        innerTextarea.setAttribute('disabled', 'true');
        getlist.classList.remove('focused');
    });
    
    innerTextarea.removeAttribute("disabled");
    
    innerTextarea.focus();



}