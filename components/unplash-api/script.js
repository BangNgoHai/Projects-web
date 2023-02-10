const btnEl = document.getElementById('btn');
const warnEl = document.querySelector("h3");
const photosEl = document.querySelector(".photos");


btnEl.addEventListener('click', () => {
    getRandomPhotos();
});

function getRandomPhotos() {
    const inputEl = document.getElementById('input').value;
    photosEl.innerHTML = ``;
    if(inputEl < 9 || inputEl > 0){
        fetch(`https://api.unsplash.com/photos?per_page=${inputEl}&page=${Math.ceil(Math.random() * 1000)}`, {
            headers: {
            "Authorization": "Client-ID jk6TWX0zjz98oZVl3O2lTuPUlaCstQNHYzZ-tCKV3IM"
            }
        })
        .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => { 
            console.log(data);
            if(data){
                data.forEach((photo)=>{
                    console.log(photo.urls);
                    let url = photo.urls.small;
                    const imgEl = document.createElement("img");
                    imgEl.src = `${url}`
                    photosEl.appendChild(imgEl);
                })
            }
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
        warnEl.innerText = "";
    }else{
        warnEl.innerText = "the maximum number of photos you can get per times is 8"
    }
}