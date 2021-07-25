let button = document.querySelector(".btn");
let birthDate = document.querySelector("#birthday");
let luckyNum = document.querySelector("#luckyNo");
let imgHappy = document.querySelector("#luckyImg");
let imgSad = document.querySelector("#unluckyImg");
let msg = document.querySelector(".message");
let crossBtn = document.querySelector(".close");
let form = document.querySelector(".form");

crossBtn.addEventListener("click", () => {
    msg.style.display = "none";
});

button.addEventListener("click", (e) => {
    calculator(birthDate.value, luckyNum.value);
});

function calculator(date, num) {
    let sum = 0;
    if (date === "" || num === "") {
            msg.style.display = "block";
            msg.innerHTML = "Fields can't be empty!!!";
    } else {
        for (let i = 0; i < date.length; i++) {
            if (Number.isInteger(parseInt(date[i]))) {
                sum += parseInt(date[i]);
            }
        }
        if (sum % num === 0) {
            msg.innerHTML = "Hurray!!You are a lucky person!";
            imgHappy.style.display = "inline";
            imgSad.style.display = "none";
            msg.style.display = "block";
        } else {
            msg.innerHTML = "Oops!!Your birthday is not a lucky number!";
            imgHappy.style.display = "none";
            imgSad.style.display = "inline";
            msg.style.display = "block";
        }
    }
}
