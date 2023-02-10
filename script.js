const btnEl = document.querySelector("button");
const proEl = document.querySelector("#project");
const couEl = document.querySelector("#course");


btnEl.addEventListener("click", () => {
    window.location.href = "https://github.com/";
});

let bigger = true;
setInterval(function() {
  if (bigger) {
    btnEl.classList.remove("smaller");
    btnEl.classList.add("bigger");
  } else {
    btnEl.classList.remove("bigger");
    btnEl.classList.add("smaller");
  }
  bigger = !bigger;
}, 1000);



function updateProjects(){
    const datas = [
        {
            title:"Button-ripple-effect ",
            img:"./assets/images/button.png",
            url:"./components/button-ripple-effect/index.html"
        },
        {
            title:"Digital-clock ",
            img:"./assets/images/clock.png",
            url:"./components/digital-clock/index.html"
        },
        {
            title:"Multiplcation ",
            img:"./assets/images/multiplication.png",
            url:"./components/multiplication-app/index.html"
        }
    ];
    for (let index = 0; index < datas.length; index++) {
        proEl.innerHTML += `
        <div class="card" id="card">
            <img src="${ datas[index].img }" alt="" id="card-img">
            <h3 class="title">${ datas[index].title }</h3>        
        </div>
        `;

        const cardEls = document.querySelectorAll(".card");

        cardEls.forEach((cardEl, index) => {
            cardEl.addEventListener("click", () => {
                window.location.href = `${ datas[index].url }`;
            })
        });
    };
}

updateProjects();


function updateCourse() {
    const data1s = [
        {
            title:"filmweb-api",
            img:"./assets/images/filmweb.png",
            url:"./components/filmwebproject/index.html"
        },
        {
            title:"rgb-game",
            img:"./assets/images/rgbproject.png",
            url:"./components/rgbproject/index.html"
        },{
            title:"realtime-calender",
            img:"./assets/images/simplecalender.png",
            url:"./components/calender/index.html"
        }
    ];
    
    for (let index = 0; index < data1s.length; index++) {
        couEl.innerHTML += `
        <div class="card2" id="card">
            <img src="${ data1s[index].img }" alt="" id="card-img">
            <h3 class="title">${ data1s[index].title }</h3>        
        </div>
        `;

        const cardEls = document.querySelectorAll(".card2");

        cardEls.forEach((cardEl, index) => {
            cardEl.addEventListener("click", () => {
                window.location.href = `${ data1s[index].url }`;
            })
        });
    };
};

updateCourse();