// Varible call
const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

// function for clock

function updateClock() {
    let h = new Date().getHours(); 
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = ""; 
    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    if(m<10){
        m = "0" + m;  // h = h<10 ? "0" + h : h;
    }
    if(h<10){      
        h = "0" + h;  // m = h<10 ? "0" + m : m;
    }
    if(s<10){
        s = "0" + s;  // s = s<10 ? "0" + s : s;
    }
    //update the clock
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    
    setTimeout(() => {
        updateClock();
    },1000)
}

updateClock();