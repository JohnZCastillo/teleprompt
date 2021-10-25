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
    inputSection.classList.remove('hide');
    document.body.style.backgroundColor = "white";
}

function showDisplay(){
    displaySection.classList.remove('hide');
    inputSection.classList.add('hide');
    document.body.style.backgroundColor = "black";
}



const toTop = document.querySelector('.totop');
    toTop.addEventListener('click',()=>{
        content.scrollTop = 0;
    })


const input = document.querySelector('.input__content');
const content = document.querySelector(".display");
const displaySection = document.querySelector('.display-section');
const inputSection = document.querySelector('.input');
const invertButton = document.querySelector('.invertButton');
    invertButton.addEventListener('click',()=>{
        content.classList.toggle("invert");
    })

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

const start = document.querySelector('.start');
    start.addEventListener('click',()=>{
        show();
        showDisplay();
        run = true;
    });
    

let run = false;

const scrollSpeed = document.querySelector('.speed');
    scrollSpeed.addEventListener('keydown',()=>{
        if(scrollSpeedPrev != scrollSpeed.value){
            console.log('hello')
            clearInterval(scrolling);
            init();
        }
    })
    
    let scrolling;

    function init(){
         scrolling =  setInterval(scroll,scrollSpeed.value);
    }
    let scrollSpeedPrev = scrollSpeed.value;
    
    init();
    
