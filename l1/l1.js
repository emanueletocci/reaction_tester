document.addEventListener('DOMContentLoaded', function(){
    let intId = null;
    let intIdModal = null;
    const container = document.querySelector('.container');
    const ready_text = document.getElementById('ready_text');
    const time = document.getElementById('time');
    const circles = document.querySelectorAll('.circle');
    const reset = document.getElementById('reset');
    const modal = document.querySelector('.modal');
    const main = document.getElementById("main-section");
    const close_button = document.getElementById('close-button');
    const modalct = document.getElementById('modal-ct'); 

    let start_time;
    let counter;
    let clickable;
    let average;
    let sum;
    let results = [];
    reset_func();

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
    container.addEventListener('click', clicked);
    reset.addEventListener('click', reset_func);

    //Click the shape
    function clicked(){
        if(ready_text.innerHTML === "Click when you are ready"){
            ready_text.innerHTML = "Click when is green";
            if(intId){
                clearTimeout(intId);
            }
            intId = setTimeout(changeColor, minMaxGen(300,3000));
        } if(clickable){ 
            let user_time = timeCalc(start_time);
            time.innerHTML = user_time +"ms";
            results.push(user_time);
            sum = sum + user_time;
            attemptColor();
            clear();
        }
    }

    function changeColor(){
        container.style.backgroundColor = "#a6d189";
        ready_text.style.color = "#181825";
        ready_text.innerHTML = "Click!";
        clickable = true;
        start_time = Date.now();
    }

    function timeCalc(t1,t2){
        t2 = Date.now();             
        return (t2-t1);   
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
        counter++;     
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
                setTimeout(showRes, 1)
                break;
            case 6:

            }
    }

    function reset_func(){
        clearTimeout(intId);
        ready_text.innerHTML = "Click when you are ready";
        counter = 0;
        clickable = false;
        average = 0;
        time.innerHTML="0"
        sum = 0;
        for (let i=0; i<5; i++){
            circles[i].style.backgroundColor = "#181825";    
        }
        container.style.backgroundColor = "#181825";
        ready_text.style.color = "#cdd6f4";

    }

    function showRes(){
        average = (sum/counter);
        alert("Your average score: "+average+ "ms");
        reset_func();
    }
});
