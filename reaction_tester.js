document.addEventListener('DOMContentLoaded', function(){

    let intId = null;
    const start_button = document.getElementById('start_button');
    start_button.addEventListener('click', buttonClicked);

    const stop_button = document.getElementById('stop_button');

    let startTime = Date.now();
    let userTime = 0;

    const shape = document.getElementById('shape');
    shape.addEventListener('click', shapeClicked);
    stop_button.addEventListener('click', stop);

    let score = 0;

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
        document.getElementById('time').innerHTML = userTime.toFixed(2);
        document.getElementById('score').innerHTML = score.toFixed(1);
        stop_button.style.display = "none";
        start_button.style.display = "inline-block";
    }
    function shapeClicked(){
        shape.style.display = "none";
        userTime = timeCalc(startTime, Date.now());
        score = score + userTime;
        document.getElementById('time').innerHTML = userTime.toFixed(2);
        document.getElementById('score').innerHTML = score.toFixed(1);
        startTime = Date.now();
        makeShapeAppear();
    }

    function timeCalc(t1,t2){
        t2 = t2 || Date.now();              //se manca t2 usa l'ora corrente
        return (t2-t1)/1000;   //toFixed rappresenta la risoluzione del numero
    }

    function randomPos(){
        shape.style.display = "block";
        shape.style.position = "relative";
        shape.style.top = Math.random()*80 + "%";
        shape.style.left = Math.random()*80+ "%";
        shapeTransform();
    }

    function shapeTransform(){
        const w = minMaxGen(10, 300);
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
