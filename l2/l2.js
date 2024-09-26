document.addEventListener('DOMContentLoaded', function(){

    let startTime;
    let userTime = 0;
    let intId = null;
    let score = 0;
    let intIdModal = null;

    const start_button = document.getElementById('start_button');
    const stop_button = document.getElementById('stop_button');
    const modal = document.querySelector('.modal');
    const close_button = document.getElementById('close-button');
    const modalct = document.getElementById('modal-ct'); 
    const shape = document.getElementById('shape');

    start_button.addEventListener('click', buttonClicked);
    shape.addEventListener('click', shapeClicked);
    stop_button.addEventListener('click', stop);

    if(intIdModal){
        clearTimeout(intIdModal);
    }
    intIdModal = setTimeout( function(){ 
        modalct.classList.remove("hidden");
        modalct.classList.add("bg-blur");
    }, 500);  //open dialog after 500ms

    close_button.addEventListener('click', function(){
        modal.classList.add("hidden");  //close dialog on click
        modalct.style.zIndex="-1";
        modalct.classList.remove("bg-blur");

    });
    
    function buttonClicked(){
        document.getElementById('start-text').innerHTML = "stop";

        makeShapeAppear();
        start_button.style.display = "none";
        stop_button.style.display = "inline-block";
        stop_button.style.backgroundColor = "#e5c890";
        stop_button.style.transform = "scale(1.2)";
    }

    function stop(){
        shape.style.display = "none";
        userTime = 0;
        score = 0;
        document.getElementById('time').innerHTML = userTime;
        document.getElementById('score').innerHTML = score;
        stop_button.style.display = "none";
        start_button.style.display = "inline-block";
    }
    function shapeClicked(){
        shape.style.display = "none";
        userTime = timeCalc(startTime);
        score = score + userTime;
        document.getElementById('time').innerHTML = userTime + " ms";
        document.getElementById('score').innerHTML = score + " ms";
        startTime = Date.now();
        makeShapeAppear();
    }

    function timeCalc(t1,t2){
        t2 = t2 || Date.now();              //se manca t2 usa l'ora corrente
        return (t2-t1);   //toFixed rappresenta la risoluzione del numero
    }

    function randomPos(){
        startTime=Date.now();
        shape.style.display = "block";
        shape.style.position = "relative";
        shape.style.top = Math.random()*80 + "%";
        shape.style.left = Math.random()*80+ "%";
        shapeTransform();
    }

    function shapeTransform(){
        const w = minMaxGen(30, 150);
        shape.style.width = w + "px";
        shape.style.height = w + "px";
        shape.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        const brChoice = Math.floor(Math.random()*2);
        if (brChoice == 1){
            shape.style.borderRadius = "50%";
        } else {
            shape.style.borderRadius = 0;
        }
    }
    function makeShapeAppear(){
        if(intId){
            clearTimeout(intId);
        }
        intId = setTimeout(randomPos, Math.random()*500);
    }

    function minMaxGen(min,max){
        return min + Math.random() * (max - min);
    }
});