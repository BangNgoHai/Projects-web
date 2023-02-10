const monthEl = document.querySelector(".month");
const dateEl = document.querySelector("#date");
const timeEl = document.querySelector(".time");


let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateCalendar(){
    let m = new Date().getMonth();
    let dt = new Date().getDate();
    let d = new Date().getDay();
    let y = new Date().getFullYear();
    monthEl.innerText = month[m];
    dateEl.innerText = dt;
    if(dt < 10){
        dt = "0" + dt;
    } 
    timeEl.innerText = `${days[d]}/${dt}/${y}`;
}

updateCalendar();