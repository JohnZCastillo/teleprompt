function scroll(){
    if(run){
        content.scrollTop+=1;
    }
}

function show(){
    content.innerHTML = input.value;
}

function hideDisplay(){
    displaySection.classList.add('hide');
}

function showDisplay(){
    displaySection.classList.remove('hide');
}
const toTop = document.querySelector('.totop');
    toTop.addEventListener('click',()=>{
        content.scrollTop = 0;
    })


const input = document.querySelector('.input__content');
const content = document.querySelector(".display");
const displaySection = document.querySelector('.display-section');

const hide = document.querySelector('.hideDislay');
    hide.addEventListener('click',()=>{
        hideDisplay();
        run = false;
        content.scrollTop = 0;
    })

const stop = document.querySelector('.stop');
    stop.addEventListener('click',()=>{
        if(run){
            run = false
        }else{
            run = true;
        }
    })


const scrollSpeed = document.querySelector('.speed');
    
const start = document.querySelector('.start');
    start.addEventListener('click',()=>{
        show();
        showDisplay();
        setTimeout(()=>{
            run = true;
        },2000)
     
    });
    

let run = false;

function getSpeed(){
    return scrollSpeed.value;
}
setInterval(scroll,20);

