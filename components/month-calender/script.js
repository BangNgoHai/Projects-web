const monthEl = document.querySelector("h1");
const dateEl = document.querySelector("p");

// functionality

const monthInx = new Date().getMonth();
const dayInx = new Date().getDay();
const dateInx = new Date().getDate();
const yearInx = new Date().getFullYear();

let m = monthInx;
let d = dayInx;
let dt = dateInx;
let y = yearInx;

if(dt<10){
    dt = "0" + dt;
}

function updateCalender() {
    // update the heading Infos
    let month = ["January","Febuary","April","May","June","July","August","September","October","November","December"];
    let day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    var i = month[m].substring(0,3);
    monthEl.innerText = `${month[m]}`;
    dateEl.innerText = `${day[d]} ${i} ${dt} ${y}`;
    //update the table
    const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate(); // get the last day of current month.
    const daysEl = document.querySelector(".days");
    const firstDay = new Date(new Date().getFullYear(), monthInx, 0).getDay();  // get the first day of current month

    let days = "";
    
    for(let j = firstDay; j > 0 ; j -- ){
        days += `<div class="empty"></div>`;  // ???
    };

    for(let j=1;j<=lastDay;j++){
        if(j === dt){
            days += `<div class="today">${j}</div>`;
        }else{
            days += `<div>${j}</div>`;
        };
    };

    daysEl.innerHTML = days;

    setTimeout(()=>{
        updateCalender()
    },1000);
};

updateCalender();

