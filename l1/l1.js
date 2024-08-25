document.addEventListener('DOMContentLoaded', function(){

    let intId = null;
    const start_button = document.getElementById('start_button');
    start_button.addEventListener('click', buttonClicked);

    const container = document.getElementById('container');
    container.addEventListener('click', shapeClicked);

    if(intId){
        clearTimeout(intId);
    }
    intId = setTimeout(colorChange, Math.random()*500);

    const stop_button = document.getElementById('stop_button');
    stop_button.addEventListener('click', stop);

    function buttonClicked(){
        document.getElementById('start-text').innerHTML = "stop";
        start_button.style.display = "none";
        stop_button.style.display = "inline-block";
        stop_button.style.backgroundColor = "#e5c890";
        stop_button.style.transform = "scale(1.2)";
    }

    function colorChange(){
        container.style.backgroundColor = "#a6e3a1";
    }

    function stop(){
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
        t2 = t2 || Date.now();             
        return (t2-t1)/1000;   
    }

    function minMaxGen(min,max){
        return min + Math.random() * (max - min);
    }
});
