
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