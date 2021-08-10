const container = document.querySelector('.color_selector');
const plusBtn = document.querySelector('.gooey.icons');
const gooeyEls = document.querySelectorAll('.gooey.el');

const listContainer = document.querySelector('.list_container');

const inputEl = document.getElementById('searchInput');

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
    innerDivContainer = document.createElement('div');

    innerP = document.createElement('p');
    innerBtn = document.createElement('div');
    innerDelete = document.createElement('div');
    innerStar = document.createElement('div');
    innerDone = document.createElement('div');

    now = new Date();


    innerDiv.className = 'list_bottom';

    innerP.className = 'list-date';
    innerP.innerHTML = `${now.getMonth() + 1} . ${now.getDate()} . ${now.getFullYear()}`;
    
    innerBtn.className = 'material-icons edit';
    innerBtn.innerHTML = 'create';
    innerBtn.setAttribute('onclick', 'edit(' + cnt + ")");


    innerDelete.className = 'material-icons delete';
    innerDelete.innerHTML = 'delete';

    innerStar.className = 'material-icons star';
    innerStar.innerHTML = 'star';
    
    innerDone.className = 'material-icons done';
    innerDone.innerHTML = 'done';

    innerDivContainer.className ='list_bottom_container';
    innerDivContainer.appendChild(innerP);
    innerDivContainer.appendChild(innerBtn);
    innerDivContainer.appendChild(innerDelete);
    innerDivContainer.appendChild(innerStar);
    innerDivContainer.appendChild(innerDone);


    innerDiv.appendChild(innerDivContainer);


    let textarea = document.createElement('textarea');
    let starDiv = document.createElement('div');
    starDiv.className = 'material-icons';
    starDiv.innerHTML = 'star';
    textarea.setAttribute('disabled', 'true');
    let color = window.getComputedStyle(event.target).backgroundColor;
    
    div.className = 'list';
    div.setAttribute('id', 'the'+cnt);
    div.style.backgroundColor = color;
    div.appendChild(textarea);
    div.appendChild(starDiv);
    div.appendChild(innerDiv);

    listContainer.insertBefore(div, listContainer.firstChild);
    cnt++;
}

//검색 부분
inputEl.oninput = function(){
    let listEls = document.querySelectorAll('.list');
    listEls.forEach(function(listEl, index){
        listEl.classList.remove('hide');
        listEl.classList.remove('see');
        if(listEl.querySelector('textarea').value.includes(inputEl.value)){
            listEl.classList.add('see');
        }else{
            listEl.classList.add('hide');
        }
    })
}

// 메인 부분

function edit(cnt){
    let getlist = document.getElementById('the' + cnt);
    let innerTextarea = document.querySelector(`#the${cnt} textarea`);
    let innerListBtn = document.querySelector(`#the${cnt} .edit`);
    let innerListDelete = document.querySelector(`#the${cnt} .delete`);
    let innerListStar = document.querySelector(`#the${cnt} .star`);
    let innerListDone = document.querySelector(`#the${cnt} .done`);



    
    let toggle = false;
    innerListDelete.addEventListener('click', function(){
        gsap.to(getlist, .3, {
            width: '0px',
            height: '0px',
            ease: Power4.easeOut
        })
        setTimeout(function(){
            listContainer.removeChild(getlist);
        }, 300)
    })

    innerListStar.addEventListener('click', function(){
        toggle = !toggle;
        if(toggle){
            getlist.classList.add('checked');
        }else{
            getlist.classList.remove('checked');
        }
        
    })

    innerTextarea.addEventListener('focus', function(){
        getlist.classList.add('focused');
        innerListBtn.style.fontSize = '0px';

        gsap.to(innerListBtn, .2, {
            width: '0px',
            height: '0px',
            margin: '15px',
            lineHeight: '0px',
            fontSize: '0px'
        })

        gsap.to(innerListDone, .2, {
            delay: .2,
            width: '30px',
            height: '30px',
            margin: '0px',
            fontSize: '16px',
            lineHeight: '30px'
        })

        gsap.to(innerListDelete, .2, {
            delay: .3,
            width: '30px',
            height: '30px',
            margin: '0px',
            fontSize: '16px',
            lineHeight: '30px',
        })

        gsap.to(innerListStar, .2, {
            delay: .4,
            width: '30px',
            height: '30px',
            margin: '0px',
            fontSize: '16px',
            lineHeight: '30px',
        })
    });


    innerListDone.addEventListener('click', function(){
        innerListDelete.style.fontSize = '0px';
        innerListDone.style.fontSize = '0px';
        innerListStar.style.fontSize = '0px';


        gsap.to(innerListStar, .2, {
            width: '0px',
            height: '0px',
            margin: '15px',
            fontSize: '0px',
            lineHeight: '0px'
        })
        
        gsap.to(innerListDelete, .2, {
            delay: .1,
            width: '0px',
            height: '0px',
            margin: '15px',
            lineHeight: '0px',
            fontSize: '0px'
        })

        gsap.to(innerListDone, .2, {
            delay: .2,
            width: '0px',
            height: '0px',
            margin: '15px',
            lineHeight: '0px',
            fontSize: '0px'
        })

        gsap.to(innerListBtn, .2, {
            delay: .3,
            width: '30px',
            height: '30px',
            margin: '0px',
            fontSize: '16px',
            lineHeight: '30px'
        })
        
        
        innerTextarea.setAttribute('disabled', 'true');
        getlist.classList.remove('focused');
        
    });
    
    innerTextarea.removeAttribute("disabled");
    innerTextarea.focus();
}

