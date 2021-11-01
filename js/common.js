
const h1Elem = document.querySelector('h1');
const navElem = document.querySelector('nav');
const menuBtn = document.querySelector('.i_menu');
const navMain = document.querySelectorAll('.main_nav > ul > li > a');
const navBox = document.querySelectorAll('.sub_nav > .on_box');
const navSubInfo= document.querySelectorAll('.sub_info > li');
const mainWheel = document.querySelector('.scroll_box');
const back = document.querySelector('.arrow')
menuBtn.addEventListener('click', clickWork);
window.addEventListener('mousewheel', wheelWork);
back.addEventListener('click', backWork);

function backWork(ev) {
    mainWheel.style.left = '70px';
}

// bx slider - auto_slider
let autoSlider = $('.auto_slide').bxSlider();
playSlide();
function playSlide() {
    autoSlider.reloadSlider({
        auto: true,
        speed: 500, 
        pause: 4000, 
        autoControls: true,
        pager: true,
    });
}


// bx slider - slider
let Slider = $('.slider').bxSlider();

let num = 70
//  let a = mainWheel.style.left = x + 'px'

function wheelWork(ev) {
    console.log(mainWheel.clientWidth);
    if(ev.wheelDelta === -120) {
        // console.log('마우스휠 아래');
        if (num >= -mainWheel.clientWidth) {
            num -= 90;
            let a = mainWheel.style.left = num + 'px';
            console.log(a);
        }
    } else {
        if (num <= 60) {
            // console.log('마우스휠 위');
            num += 90;
            let a = mainWheel.style.left = num + 'px';
            console.log(a);
        }
    }
    
    
}
// 휠 작동 확인
// mainWheel 스타일 left값 확인
// 휠 아래로 내릴때 마다 left 값에 -10 씩 해준다.
// 위로 할때는 반대로
// 부드럽게 넘어가게 애니메이션을 준다 - 다시 문제;;


for (let i = 0; i < navMain.length; i++) {
    navMain[i].addEventListener('click', navClickWork);
}

function navClickWork(ev) {
    ev.preventDefault();
    if (ev.target.tagName !== 'A') return;

    for (let i = 0; i < navBox.length; i++) {
        navBox[i].classList.remove('on');
        
        let targetName = ev.target.classList.item(0);
        if (navBox[i].classList.contains(targetName)) {
            navBox[i].classList.add('on');
        }
    }
}

for (let i = 0; i < navSubInfo.length; i++) {
    navSubInfo[i].addEventListener('mouseenter', enterWork);
    navSubInfo[i].addEventListener('mouseleave', leaveWork);
}

function enterWork(ev) {
    ev.target.classList.add('mouse_up');
}

function leaveWork(ev) {
    ev.target.classList.remove('mouse_up');
}

function clickWork(ev) {
    ev.preventDefault();
    if (!menuBtn.classList.contains('on')){ //class에 on이 없을때
        h1Elem.classList.add('on');
        navElem.classList.add('on');
        menuBtn.classList.add('on');  
    } else {
        h1Elem.classList.remove('on');
        navElem.classList.remove('on');
        menuBtn.classList.remove('on');
        for (let i = 0; i < navBox.length; i++) {
            navBox[i].classList.remove('on');
        }
    }
    
}
