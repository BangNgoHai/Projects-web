const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos" , x + "px")
    btnEl.style.setProperty("--yPos" , y + "px") 

});

btnEl.onclick = google;

function google() {
    window.location.href = "http://www.google.com";
};