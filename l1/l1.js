document.addEventListener('DOMContentLoaded', function(){
    let intId = null;
    const container = document.querySelector('.container');
    const ready_text = document.getElementById('ready_text');
    const time = document.getElementById('time');
    const average = document.getElementById('average');
    let start_time;
    let counter = 0;
    let clickable = false;
    results = [];
    container.addEventListener('click', clicked);

    function clicked(){
        if(ready_text.innerHTML === "Click when you are ready"){
            ready_text.innerHTML = "Click when is green";
            if(intId){
                clearTimeout(intId);
            }
            intId = setTimeout(changeColor, minMaxGen(300,3000));
        } else if(clickable){ 
            let user_time = timeCalc(start_time);
            time.innerHTML = user_time.toFixed(3) + "s";
            results.push(user_time);
            counter++;     
            attemptColor();
            clear();
        }
    }

    function changeColor(){
        start_time = Date.now();
        container.style.backgroundColor = "#a6d189";
        ready_text.style.color = "#181825";
        clickable = true;
    }

    function timeCalc(t1,t2){
        t2 = t2 || Date.now();             
        return (t2-t1)/1000;   
    }
    
    function minMaxGen(min,max){
        return min + Math.random() * (max - min);
    }

    function clear(){
        container.style.backgroundColor = "#181825";
        ready_text.style.color = "#cdd6f4";
        ready_text.innerHTML ="Click when you are ready";
        clickable = false;
    }

    function attemptColor(){
        let circles = document.querySelectorAll('.circle');
        switch (counter) {
            case 1:
                circles[0].style.backgroundColor = "#a6d189";
                break;
            case 2:
                circles[1].style.backgroundColor = "#a6d189";
                break;
            case 3: 
                circles[2].style.backgroundColor = "#a6d189";
                break;
            case 4:
                circles[3].style.backgroundColor = "#a6d189";
                break;
            case 5: 
                circles[4].style.backgroundColor = "#a6d189";
                break;
            default:
                alert("Error");
                break;
        }
    }
});
