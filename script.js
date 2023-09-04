let counter = 60;
let score = 0;
let hitBubble = 0;

document.querySelector("#bottom").addEventListener("click", (details) => {
    let clickedBubble = Number(details.target.textContent);
    if(clickedBubble === hitBubble){
        addScore();
        getNewHit();
        makeBubble();
    }
});

const addScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}
const getNewHit = () => {
    hitBubble = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitBubble;
}

const timer = () => {
    let interval = setInterval(() => {
        if(counter>0) {
            counter--;
            document.querySelector("#timer").textContent = counter;
            // console.log(counter);
        }
        else{
            // console.log(counter);
            clearInterval(interval);
            document.querySelector("#bottom").innerHTML = `<div id="gameOver">
            <h1>Game Over!</h1>
            <h2 id="finalScore">Your Score: ${score}</h2>
            </div>`;
            
        }
    }, 1000);
}

const makeBubble = () => {
    let bubbleBox = "";

for(let i = 1; i<=192; i++){
    bubbleBox += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}

document.querySelector("#bottom").innerHTML = bubbleBox;
}

makeBubble();
timer();
getNewHit();    