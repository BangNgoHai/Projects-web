// set the variable for num1 and num2
const num1 = Math.ceil(Math.random()*10);  
const num2 = Math.ceil(Math.random()*10);

// get the elements from html
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

// update the question
questionEl.innerText = `What is ${num1} multiply ${num2} ?`;

const correctAnswer = num1 * num2; 

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {     // if there is no score then just set score = 0
    score = 0;
}

// update the score
scoreEl.innerText = `score: ${score}`;

formEl.addEventListener('submit', () => {
    const userAnswer = +inputEl.value;   // get the value(string) from inputEl "+" change type of value to number
    if(userAnswer === correctAnswer){    // compare the answer using if else
        score = score +1;
        updatelocalStorage();
    }else{
        score = score -1;
        updatelocalStorage();
    }
});

// set a localplace for score in form
function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));  
}

