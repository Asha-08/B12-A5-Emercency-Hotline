
// heart icon
const lifeNumber = document.getElementById("life-number");
const lifes = document.querySelectorAll(".life");
let lifeCount = 0;
for(const num of lifes){
    num.addEventListener("click",function(){
        lifeCount++;
        lifeNumber.textContent = lifeCount;
    });
}

// copy section

const countNumber = document.getElementById("count-number");
const copyBtns = document.querySelectorAll(".copy-btn");
let copyNum = 0;
for(const button of copyBtns){
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const copyTags = card.querySelectorAll(".copy-info h1");
        const copyText = copyTags[1].innerText;
        navigator.clipboard.writeText(copyText).then(() => {
            alert("Number Copied:" + copyText);

            copyNum++;
            countNumber.textContent = copyNum;
        });
    });
}

// call section
let countCoin = document.getElementById("count-coin");
let coins = parseInt(countCoin.textContent);

let callbtns = document.querySelectorAll(".call-btn");

let callHistory = document.getElementById("call-history");

for (let callbtn of callbtns){
    callbtn.addEventListener("click",function(){
        if (coins >= 20){
            let callCard = callbtn.closest(".card");
            let serviceName = callCard.querySelector(".service-name").textContent;
            let serviceNumber = callCard.querySelector(".service-number").textContent;

            alert(`calling ${serviceName} : ${serviceNumber}`);
            coins -= 20;
            countCoin.textContent = coins;

            // create card

            let newCard = document.createElement("div");
            newCard.className = "flex justify-between p-3 rounded-xl shadow-xl mb-[4px]";
            let currentTime = new Date();
            let time = currentTime.toLocaleTimeString();

            newCard.innerHTML = `
            <div>
                    <h1 class="text-xl font-semibold">${serviceName}</h1>
                    <p>${serviceNumber}</p>
                </div>
                <span>${time}</span>
                `;

                callHistory.appendChild(newCard);

        }
        else{
            alert("You do not have enough coin");
            return;
        }
    });
}

// clear button

let clear = document.getElementById("button-clear");
clear.addEventListener("click",function(){
    callHistory.innerHTML = "";
});