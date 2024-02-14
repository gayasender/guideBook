let startBtn, openTitle, BtnTitle, bgImg;
let numPress = 0;

window.addEventListener('load', () => {
    loadingElements();

    startBtn.addEventListener("click", page2);
    BtnTitle.addEventListener("click", page2);

    BtnTitle.addEventListener("mouseover", floatingBtn);
    startBtn.addEventListener("mouseover", floatingBtn);
    BtnTitle.addEventListener("mouseout", stopfloatingBtn);
    startBtn.addEventListener("mouseout", stopfloatingBtn);
});

const loadingElements = () => {
    startBtn = document.getElementById("startBtn");
    openTitle = document.getElementById("open-title");
    BtnTitle = document.getElementById("startBtnTitle");
    bgImg = document.getElementById("openingBg");
}

const page2 = () => {
    numPress++;
    startBtn.removeEventListener("click", page2);
    BtnTitle.removeEventListener("click", page2);
    openTitle.classList.add("text-fade-out");
    // openTitle.style.display = "none";
    BtnTitle.classList.add("textbtn-fade-out");
    // BtnTitle.style.display = "none";

    stopfloatingBtn();

    startBtn.classList.add("move-btn");
    setTimeout(() => {
        startBtn.classList.remove("move-btn");
        startBtn.style.width = "12vw";
        startBtn.style.right = "42vw";
        startBtn.style.bottom = "10vh";
        BtnTitle.style.bottom = "12.5vh";
        BtnTitle.style.fontSize = "3.5vmin";
        BtnTitle.style.width = "10vw";
        BtnTitle.style.right = "43.5vw";
        BtnTitle.innerText = "קדימה למשחק";
        BtnTitle.classList.add("page2-text-fadein");
        openTitle.style.height = "30vh";
        openTitle.style.width = "50vw";
        openTitle.style.bottom = "35vh";
        openTitle.style.right = "25vw";
        openTitle.innerText = "לפניכם 3 משימות שעוסקות בבניית תיק מדריך. מוכנים?";
        openTitle.classList.add("text-fade-in");

    }, 1000);
    startBtn.addEventListener("click", fadeAllOut);
    BtnTitle.addEventListener("click", fadeAllOut);
}

const floatingBtn = () => {
    if(numPress === 0) {
        startBtn.classList.add("floating-btn");
    }else if(numPress === 1) {
        startBtn.classList.add("floating-smaller-btn");
    }else {
        BtnTitle.removeEventListener("mouseover", floatingBtn);
        startBtn.removeEventListener("mouseover", floatingBtn);
        BtnTitle.removeEventListener("mouseout", stopfloatingBtn);
        startBtn.removeEventListener("mouseout", stopfloatingBtn);
    }

}

const stopfloatingBtn = () => {
    if(numPress < 2) {
        startBtn.classList.remove("floating-smaller-btn");
        startBtn.classList.remove("floating-btn");
    }else {
        BtnTitle.removeEventListener("mouseover", floatingBtn);
        startBtn.removeEventListener("mouseover", floatingBtn);
        BtnTitle.removeEventListener("mouseout", stopfloatingBtn);
        startBtn.removeEventListener("mouseout", stopfloatingBtn);
    }
}

const fadeAllOut = () => {
    numPress++;
    startBtn.classList.remove("text-fade-in");
    openTitle.classList.remove("text-fade-in");
    BtnTitle.classList.remove("page2-text-fadein");
    startBtn.classList.add("text-fade-out");
    openTitle.classList.add("text-fade-out");
    BtnTitle.classList.add("text-fade-out");


    bgImg.classList.add("text-fade-out");
    
    setTimeout(() => {
        bgImg.setAttribute("src", "images/part1Screen/part1Bg.png");
        bgImg.classList.add("fade-in");
        startBtn.style.display = "none";
        BtnTitle.style.display = "none";


        bgImg.classList.remove("text-fade-out");
    }, 300);

}




