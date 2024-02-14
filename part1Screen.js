let pressNum = 0, pageCounter = 1;
let btnLevels;
let chosenAns = "", chosenSpace = "";
let answersArr = new Array();
let correctAns = true;
let exer2AnsArr = ["firstAnswer", "secondAnswer", "secondAnswer", "firstAnswer", "firstAnswer"];
let exer2CounterAns = 0;
let counterTextAns = 0;
let currentQuest = 1;
var currentCard = "";
let currText = "";
var chosenFirstCard = "", chosenSecondCard = "";
let trueCardsCount = 0;

let cardsTexts = [{name: "card1" , text: "מבואות", chosed: false},
{name: "card2" , text: "העמקה מקצועית בתוכן הנלמד עבור המדריך.", chosed: false},
{name: "card3" , text: "רצף של השיעור והנחיות למעביר השיעור באשר לאופן העברתו.", chosed: false},
{name: "card4" , text: "תיק תוכן כולל בתוכו...", chosed: false},
{name: "card5" , text: "מערך שיעור כולל בתוכו...", chosed: false},
{name: "card6" , text: "נספחים זהו מכלול עזרי לימוד שכולל בתוכו...", chosed: false},
{name: "card7" , text: "דף מבוא למדריך הכולל את קהל ביעד, מיקום השיעור ברצף ההכשרה, מידת קושי השיעור ודגשים למדריך.", chosed: false},
{name: "card8" , text: "מצגת, לומדה, סרטון וכו'.", chosed: false}];


// let cardTexts = ["מבואות",
// "העמקה מקצועית בתוכן הנלמד עבור המדריך.",
// "רצף של השיעור והנחיות למעביר השיעור באשר לאופן העברתו.",
// "תיק תוכן כולל בתוכו...",
// "מערך שיעור כולל בתוכו...",
// "נספחים זהו מכלול עזרי לימוד שכולל בתוכו...",
// "דף מבוא למדריך הכולל את קהל ביעד, מיקום השיעור ברצף ההכשרה, מידת קושי השיעור ודגשים למדריך.",
// "מצגת, לומדה, סרטון וכו'."];

window.addEventListener('load', () => {
    loadingAllElements();
    
});

const loadingAllElements = () => {
    btnLevels = document.getElementById("btn-levels");

    document.getElementById("startBtn").addEventListener("click", replaceBg);
    document.getElementById("startBtnTitle").addEventListener("click", replaceBg);
    btnLevels.addEventListener("click", nextPage);
    document.getElementById("btn-check-text").addEventListener("click", checkDragAns);
    document.getElementById("btn-check").addEventListener("click", checkDragAns);

    for(let i=1;i<=8;i++) {
        if(!cardsTexts[i-1].chosed) {
            document.getElementById(`card${i}`).addEventListener("click", showCard1);
            document.getElementById(`card${i}`).addEventListener("mouseover", cardGlow);
            document.getElementById(`card${i}`).addEventListener("mouseout", cardUnGlow);
        }
    }
}

const replaceBg = () => {
    setTimeout(() => {
        if(pressNum === 0) {
            pressNum++;
        } else if(pressNum === 1) {
            pressNum++;
            setTimeout(() => {
                document.getElementById("page2").classList.add("fade-in");
                document.getElementById("page2").style.opacity = "1";
                document.getElementById("page2").style.display = "block";
            }, 1000);
        }
    }, 1);
}

const nextPage = () => {
    if(pageCounter === 1) {
        showExer1();
    }
}

const showExer1 = () => {
    document.getElementById("page2").classList.remove("fade-in");
    document.getElementById("part1-title").classList.add("title-go-up");
    document.getElementById("part1-instruct1").classList.add("fade-out");
    document.getElementById("part1-instruct2").classList.add("fade-out");
    document.getElementById("part1-instruct3").classList.add("fade-out");
    document.getElementById("btn-levels").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("firstExer").classList.add("fade-in");
        document.getElementById("firstExer").style.display = "block";
        document.getElementById("firstExer").style.opacity = "1";

        document.getElementById("part1-instruct1").style.display = "none";
        document.getElementById("part1-instruct2").style.display = "none";
        document.getElementById("part1-instruct3").style.display = "none";
        document.getElementById("btn-levels").style.display = "none";
    }, 1000);
    setTimeout(() => {
        document.getElementById("part1-title").style.bottom = "80vh";
    }, 2000);
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    chosenAns = ev.dataTransfer.getData("text", ev.target.id);
    console.log(chosenAns);
  }
  
  function drop(ev) {
    ev.preventDefault();
    chosenSpace = ev.target.id;
    console.log(chosenSpace);

    //תמיד שם את זה שם
    document.getElementById(chosenAns).style.right = "10.7vw";

    if(chosenSpace === "space1") {
        //חלונית ראשונה
        document.getElementById(chosenAns).style.top = "21.4vh";
        answersArr[0] = chosenAns;
    } else if(chosenSpace === "space2") {
        //חלונית שנייה 
        document.getElementById(chosenAns).style.top = "33.3vh";
        answersArr[1] = chosenAns;
    } else if(chosenSpace === "space3") {
        //חלונית שלישית
        document.getElementById(chosenAns).style.top = "45.3vh";
        answersArr[2] = chosenAns;
    } else if(chosenSpace === "space4") {
        //חלונית רביעית
        document.getElementById(chosenAns).style.top = "57.4vh";
        answersArr[3] = chosenAns;
    } else if(chosenSpace === "space5") {
        //חלונית חמישית
        document.getElementById(chosenAns).style.top = "69.4vh";
        answersArr[4] = chosenAns;
    }
}

const checkDragAns = () => {
    for(let i = 0; i < answersArr.length; i++) {
        if(answersArr[i] === `spaceBank${i+1}`){
            correctAns++;
            document.getElementById(`spaceBank${i+1}`).setAttribute("draggable", "false");
            document.getElementById(`spaceBank${i+1}`).style.cursor = "default";
            document.getElementById(`spaceBank${i+1}`).style.backgroundColor = "rgb(171, 221, 181)";

            for(let j = 0; j < answersArr.length; j++) {
                if(document.getElementById(`spaceBank${j+1}`).style.cursor !== "default") {
                    correctAns = false;
                }
            }

            if(correctAns) {
                document.getElementById(`btn-check-text`).innerHTML = "המשך";
                document.getElementById("btn-check-text").removeEventListener("click", checkDragAns);
                document.getElementById("btn-check").removeEventListener("click", checkDragAns);

                setTimeout(() => {
                    document.getElementById("btn-check-text").addEventListener("click", movetoPart2);
                    document.getElementById("btn-check").addEventListener("click", movetoPart2);
                }, 1000);
            }
        }else {
            document.getElementById(`spaceBank${i+1}`).style.backgroundColor = "rgb(234, 161, 146)";
            setTimeout(() => {
                document.getElementById(`spaceBank${i+1}`).style.backgroundColor = "rgb(250, 216, 127)";
            }, 2000);
            setTimeout(() => {
                if(document.getElementById(answersArr[i]).style.top !== "87.8vh") {
                    document.getElementById(answersArr[i]).classList.add(`space-bank${i+1}-goback`);
                    document.getElementById(answersArr[i]).style.top = "87.8vh";
                    if(`spaceBank${i+1}` === `spaceBank1`) {
                        document.getElementById(answersArr[i]).style.right = "25vw";
                    }else if(`spaceBank${i+1}` === `spaceBank2`) {
                        document.getElementById(answersArr[i]).style.right = "10vw";
                    }else if(`spaceBank${i+1}` === `spaceBank3`) {
                        document.getElementById(answersArr[i]).style.right = "70vw";
                    }else if(`spaceBank${i+1}` === `spaceBank4`) {
                        document.getElementById(answersArr[i]).style.right = "55vw";
                    }else if(`spaceBank${i+1}` === `spaceBank5`) {
                        document.getElementById(answersArr[i]).style.right = "40vw";
                    }
                }
            }, 2000);
            setTimeout(() => {
                document.getElementById(answersArr[i]).classList.remove(`space-bank${i+1}-goback`);
            }, 4000);
        }
    }
}

const movetoPart2 = () => {
    document.getElementById("btn-check-text").removeEventListener("click", movetoPart2);
    document.getElementById("btn-check").removeEventListener("click", movetoPart2);
    document.getElementById("part1-title").classList.add("move-title-to-part2");
    document.getElementById("exerTable").classList.add("move-questspace-to-part2");
    document.getElementById("exerBank").classList.add("move-bankspace-to-part2");
    document.getElementById("spaceBank1").classList.add("move-bankspace1-to-part2");
    document.getElementById("spaceBank2").classList.add("move-bankspace2-to-part2");
    document.getElementById("spaceBank3").classList.add("move-bankspace3-to-part2");
    document.getElementById("spaceBank4").classList.add("move-bankspace4-to-part2");
    document.getElementById("spaceBank5").classList.add("move-bankspace5-to-part2");
    document.getElementById("btn-check").classList.add("move-btncheck-to-part2");

    setTimeout(() => {
        document.getElementById("page3").classList.add("move-part3");
        setTimeout(() => {
            document.getElementById("page3").style.right = "-1vw";
            document.getElementById("btn-check-text").removeEventListener("click", movetoPart2);
            document.getElementById("btn-check").removeEventListener("click", movetoPart2);

            document.getElementById("btn-part2-levels").addEventListener("click", movetoExer2);
            document.getElementById("btn-part2-text").addEventListener("click", movetoExer2);
        }, 3000);
    }, 1500);

    setTimeout(() => {
        document.getElementById("part1-title").style.right = "120vw";
        document.getElementById("exerTable").style.right = "120vw";
        document.getElementById("exerBank").style.right = "120vw";
        document.getElementById("spaceBank1").style.right = "120vw";
        document.getElementById("spaceBank2").style.right = "120vw";
        document.getElementById("spaceBank3").style.right = "120vw";
        document.getElementById("spaceBank4").style.right = "120vw";
        document.getElementById("spaceBank5").style.right = "120vw";
        document.getElementById("btn-check").style.right = "120vw";
    }, 3000);
}

const movetoExer2 = () => {
    document.getElementById("btn-part2-levels").removeEventListener("click", movetoExer2);
    document.getElementById("btn-part2-text").removeEventListener("click", movetoExer2);
    document.getElementById("part2-title").classList.add("title-go-up");
    document.getElementById("part2-instruct1").classList.add("fade-out");
    document.getElementById("part2-instruct2").classList.add("fade-out");
    document.getElementById("part2-instruct3").classList.add("fade-out");
    document.getElementById("part2-instruct4").classList.add("fade-out");
    document.getElementById("btn-part2-levels").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("part2-title").style.bottom = "80vh";
        document.getElementById("part2-instruct1").style.display = "none";
        document.getElementById("part2-instruct2").style.display = "none";
        document.getElementById("part2-instruct3").style.display = "none";
        document.getElementById("part2-instruct4").style.display = "none";
        document.getElementById("btn-part2-levels").style.display = "none";
    }, 1900);

    document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("fade-in");
    document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("fade-in");
    setTimeout(() => {
        document.getElementById(`firstAnswerQuest${currentQuest}`).style.opacity = "1";
        document.getElementById(`firstAnswerQuest${currentQuest}`).style.display = "block";

        document.getElementById(`secondAnswerQuest${currentQuest}`).style.opacity = "1";
        document.getElementById(`secondAnswerQuest${currentQuest}`).style.display = "block";

        setTimeout(() => {
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("fade-in");
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("fade-in");

            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("ans1-pressed");
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("ans2-pressed");

            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);

            document.getElementById(`firstAnswerQuest${currentQuest}`).addEventListener("click", firstAnsPress);
            document.getElementById(`secondAnswerQuest${currentQuest}`).addEventListener("click", secondAnsPress);
        }, 1000);
    }, 1000);
}

const firstAnsPress = () => {
    if(exer2AnsArr[exer2CounterAns] === "firstAnswer") {
        exer2CounterAns++;
        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("ans1-pressed");
        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("ans2-pressed");

        if(currentQuest === 3) {
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text3-1-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text3-1-pressed`);

            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text3-2-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text3-2-pressed`);
        }else {
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);
        }

        document.getElementById(`firstAnswerQuest${currentQuest}`).removeEventListener("click", firstAnsPress);
        document.getElementById(`secondAnswerQuest${currentQuest}`).removeEventListener("click", secondAnsPress);
    
        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("center-first-ans");
        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("false-ans-out");  
        
        setTimeout(() => {
            document.getElementById(`firstAnswerQuest${currentQuest}`).style.right = "35vw";
            document.getElementById(`secondAnswerQuest${currentQuest}`).style.top = "35vh";
            document.getElementById(`secondAnswerQuest${currentQuest}`).style.opacity = "0";
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("center-first-ans");
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("false-ans-out");
    
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("uncenter-first-ans");
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("false-ans-in");
            setTimeout(() => {
                document.getElementById(`firstAnswerQuest${currentQuest}`).style.right = "15vw";
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.top = "25vh";
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.opacity = "1";
                document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("uncenter-first-ans");
                document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("false-ans-in");

                document.getElementById(`firstAnswerQuest${currentQuest}`).style.removeProperty("right");
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.removeProperty("top");

                document.getElementById(`firstAnswerQuest${currentQuest}`).style.display = "none";
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.display = "none";
                
                currentQuest++;

                if(currentQuest < 5) {
                    document.getElementById(`firstAnswerQuest${currentQuest}`).style.display = "block";
                    document.getElementById(`secondAnswerQuest${currentQuest}`).style.display = "block";
                    document.getElementById(`firstAnswerQuest${currentQuest}`).style.opacity = "1";
                    document.getElementById(`secondAnswerQuest${currentQuest}`).style.opacity = "1";

                    document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("ans1-pressed");
                    document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("ans2-pressed");

                    if(currentQuest === 3) {
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text3-1-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text3-1-pressed`);
            
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text3-2-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text3-2-pressed`);
                    }else {
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);
                    }
    
                    document.getElementById(`firstAnswerQuest${currentQuest}`).addEventListener("click", firstAnsPress);
                    document.getElementById(`secondAnswerQuest${currentQuest}`).addEventListener("click", secondAnsPress);
                }else {
                    movetoPart3();
                }
            }, 3000);
        }, 3000);
    }
}

const secondAnsPress = () => {
    if(exer2AnsArr[exer2CounterAns] === "secondAnswer") {
        exer2CounterAns++;
        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("ans1-pressed");
        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("ans2-pressed");

        if(currentQuest === 3) {
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text3-1-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text3-1-pressed`);

            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text3-2-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text3-2-pressed`);
        }else {
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);
        }

        document.getElementById(`firstAnswerQuest${currentQuest}`).removeEventListener("click", firstAnsPress);
        document.getElementById(`secondAnswerQuest${currentQuest}`).removeEventListener("click", secondAnsPress);
    
        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("center-second-ans");
        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("false-ans-out");  
        
        setTimeout(() => {
            document.getElementById(`secondAnswerQuest${currentQuest}`).style.right = "35vw";
            document.getElementById(`firstAnswerQuest${currentQuest}`).style.top = "35vh";
            document.getElementById(`firstAnswerQuest${currentQuest}`).style.opacity = "0";
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("center-second-ans");
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("false-ans-out");
    
            document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("uncenter-second-ans");
            document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("false-ans-in");
            setTimeout(() => {
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.right = "55vw";
                document.getElementById(`firstAnswerQuest${currentQuest}`).style.top = "25vh";
                document.getElementById(`firstAnswerQuest${currentQuest}`).style.opacity = "1";
                document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("uncenter-second-ans");
                document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("false-ans-in");

                document.getElementById(`secondAnswerQuest${currentQuest}`).style.removeProperty("right");
                document.getElementById(`firstAnswerQuest${currentQuest}`).style.removeProperty("top");

                document.getElementById(`firstAnswerQuest${currentQuest}`).style.display = "none";
                document.getElementById(`secondAnswerQuest${currentQuest}`).style.display = "none";
                
                currentQuest++;

                if(currentQuest < 5) {
                    document.getElementById(`firstAnswerQuest${currentQuest}`).style.display = "block";
                    document.getElementById(`secondAnswerQuest${currentQuest}`).style.display = "block";
                    document.getElementById(`firstAnswerQuest${currentQuest}`).style.opacity = "1";
                    document.getElementById(`secondAnswerQuest${currentQuest}`).style.opacity = "1";
                    
                    document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add("ans1-pressed");
                    document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add("ans2-pressed");

                    if(currentQuest === 3) {
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text3-1-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text3-1-pressed`);
            
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text3-2-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text3-2-pressed`);
                    }else {
                        document.getElementById(`firstAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);
                        document.getElementById(`secondAnswerQuest${currentQuest}`).classList.add(`ans-text${currentQuest}-pressed`);
                    }
                    
                    document.getElementById(`firstAnswerQuest${currentQuest}`).addEventListener("click", firstAnsPress);
                    document.getElementById(`secondAnswerQuest${currentQuest}`).addEventListener("click", secondAnsPress);
                }else {
                    document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove("ans1-pressed");
                    document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove("ans2-pressed");

                    document.getElementById(`firstAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);
                    document.getElementById(`secondAnswerQuest${currentQuest}`).classList.remove(`ans-text${currentQuest}-pressed`);

                    document.getElementById(`firstAnswerQuest${currentQuest}`).removeEventListener("click", firstAnsPress);
                    document.getElementById(`secondAnswerQuest${currentQuest}`).removeEventListener("click", secondAnsPress);

                    movetoPart3();
                }
            }, 3000);
        }, 3000);
    }
}

const movetoPart3 = () => {
    document.getElementById("part2-title").classList.add(`move-title-up-end`);
    document.getElementById(`firstAnswerQuest${currentQuest-1}`).style.animation = "FadeOut .5s";
    document.getElementById(`secondAnswerQuest${currentQuest-1}`).style.animation = "FadeOut .5s";

    setTimeout(() => {
        document.getElementById(`firstAnswerQuest${currentQuest-1}`).style.display = "none";
        document.getElementById(`firstAnswerQuest${currentQuest-1}`).style.opacity = "0";

        document.getElementById(`secondAnswerQuest${currentQuest-1}`).style.display = "none";
        document.getElementById(`secondAnswerQuest${currentQuest-1}`).style.opacity = "0";
        setTimeout(() => {
            document.getElementById("part2-title").style.bottom = "110vh";
            document.getElementById("page4").classList.add(`page4-goin`);
    
            setTimeout(() => {
                document.getElementById("page4").style.bottom = "-5vh";
                document.getElementById("btn-part3-levels").addEventListener("click", moveToExer3);
            }, 2000);
        }, 1500);

    }, 500);
}

const moveToExer3 = () => {
    document.getElementById("page4").classList.remove(`page4-goin`);
    document.getElementById("part3-title").classList.add(`page4-title-goup`);
    document.getElementById("part3-instruct1").classList.add(`page4-goout`);
    document.getElementById("part3-instruct2").classList.add(`page4-goout`);
    document.getElementById("part3-instruct3").classList.add(`page4-goout`);
    document.getElementById("btn-part3-levels").classList.add(`page4-goout`);

    setTimeout(() => {
        document.getElementById("part3-instruct1").style.opacity = 0;
        document.getElementById("part3-instruct1").style.display = "none";

        document.getElementById("part3-instruct2").style.opacity = 0;
        document.getElementById("part3-instruct2").style.display = "none";

        document.getElementById("part3-instruct3").style.opacity = 0;
        document.getElementById("part3-instruct3").style.display = "none";

        document.getElementById("btn-part3-levels").style.opacity = 0;
        document.getElementById("btn-part3-levels").style.display = "none";

        setTimeout(() => {
            document.getElementById("part3-title").style.bottom = "85vh";
        }, 1000);
    }, 1000);

    setTimeout(() => {
        document.getElementById("thirdExer").style.animation = "showThirdExer 2s";

        setTimeout(() => {
            document.getElementById("thirdExer").style.top = "0vh";
        }, 2000);
    }, 2000);
}

const cardGlow = (event) => {
    document.getElementById(event.currentTarget.id).style.boxShadow = "0 0 50px 15px white";
}

const cardUnGlow = (event) => {
    document.getElementById(event.currentTarget.id).style.removeProperty("box-shadow");
}

const showCard1 = (event) => {
    for(let i=1;i<=8;i++) {
        if(!cardsTexts[i-1].chosed) {
            document.getElementById(`card${i}`).style.cursor = "default";
            document.getElementById(`card${i}`).removeEventListener("click", showCard1);
            document.getElementById(`card${i}`).removeEventListener("mouseover", cardGlow);
            document.getElementById(`card${i}`).removeEventListener("mouseout", cardUnGlow);
        }
    }

    currentCard = event.currentTarget.id;
    chosenFirstCard = event.currentTarget.id;
    document.getElementById(`${currentCard}-text`).style.animation = "hideText .5s";

    setTimeout(() => {
        document.getElementById(`${currentCard}-text`).style.opacity = "0";
        for(let i = 0; i < 8; i++) {
            if(currentCard === cardsTexts[i].name) {
                currText = cardsTexts[i].text;
            }
        }
        document.getElementById(`${currentCard}-text`).innerText = currText;
        document.getElementById(`${currentCard}-text`).classList.remove("cards-text");
        document.getElementById(`${currentCard}-text`).classList.add(`${currentCard}-text`);

        setTimeout(() => {
            document.getElementById(`${currentCard}-text`).style.animation = "showText .5s";
        }, 500);

        setTimeout(() => {
            document.getElementById(`${currentCard}-text`).style.opacity = "1";

            for(let i=1;i<=8;i++) {
                if(`card${i}` != currentCard && !cardsTexts[i-1].chosed) {
                    document.getElementById(`card${i}`).style.cursor = "pointer";
                    document.getElementById(`card${i}`).addEventListener("click", showCard2);
                    document.getElementById(`card${i}`).addEventListener("mouseover", cardGlow);
                    document.getElementById(`card${i}`).addEventListener("mouseout", cardUnGlow);
                }
            }
        }, 500);
    }, 500);
}

const showCard2 = (event) => {
    for(let i=1;i<=8;i++) {
        if(`card${i}` != currentCard && !cardsTexts[i-1].chosed) {
            document.getElementById(`card${i}`).style.cursor = "default";
            document.getElementById(`card${i}`).removeEventListener("click", showCard2);
            document.getElementById(`card${i}`).removeEventListener("mouseover", cardGlow);
            document.getElementById(`card${i}`).removeEventListener("mouseout", cardUnGlow);
        }
    }

    currentCard = event.currentTarget.id;
    chosenSecondCard = event.currentTarget.id;
    document.getElementById(`${currentCard}-text`).style.animation = "hideText .5s";

    setTimeout(() => {
        document.getElementById(`${currentCard}-text`).style.opacity = "0";
        for(let i = 0; i < 8; i++) {
            if(currentCard === cardsTexts[i].name) {
                currText = cardsTexts[i].text;
            }
        }
        document.getElementById(`${currentCard}-text`).innerText = currText;
        document.getElementById(`${currentCard}-text`).classList.remove("cards-text");
        document.getElementById(`${currentCard}-text`).classList.add(`${currentCard}-text`);

        setTimeout(() => {
            document.getElementById(`${currentCard}-text`).style.animation = "showText .5s";
        }, 250);

        setTimeout(() => {
            document.getElementById(`${currentCard}-text`).style.opacity = "1";
            checkChosenCards();
        }, 500);
    }, 500);
}

const checkChosenCards = () => {
    if(chosenFirstCard === "card1") {
        if(chosenSecondCard === "card7") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card2") {
        if(chosenSecondCard === "card4") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card3") {
        if(chosenSecondCard === "card5") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card4") {
        if(chosenSecondCard === "card2") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card5") {
        if(chosenSecondCard === "card3") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card6") {
        if(chosenSecondCard === "card8") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card7") {
        if(chosenSecondCard === "card1") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }else if(chosenFirstCard === "card8") {
        if(chosenSecondCard === "card6") {
            trueMatch();
        }else {
            wrongMatch();
        }
    }
}

const trueMatch = () => {
    trueCardsCount++;
    for(let i = 0; i < 8; i++) {
        if(chosenFirstCard === cardsTexts[i].name) {
            cardsTexts[i].chosed = true;
            document.getElementById(chosenFirstCard).style.boxShadow = "0 0 50px 15px rgb(171, 221, 181)";
        }
        if(chosenSecondCard === cardsTexts[i].name) {
            cardsTexts[i].chosed = true;
            document.getElementById(chosenSecondCard).style.boxShadow = "0 0 50px 15px rgb(171, 221, 181)";
        }
    }
    document.getElementById(chosenFirstCard).style.cursor = "default";
    document.getElementById(chosenSecondCard).style.cursor = "default";

    if(trueCardsCount < 4) {
        for(let i=1;i<=8;i++) {
            if(!cardsTexts[i-1].chosed) {
                document.getElementById(`card${i}`).style.cursor = "pointer";
                document.getElementById(`card${i}`).addEventListener("click", showCard1);
                document.getElementById(`card${i}`).addEventListener("mouseover", cardGlow);
                document.getElementById(`card${i}`).addEventListener("mouseout", cardUnGlow);
            }
        }
    }else {
        finaleScreen();
    }


}

const wrongMatch = () => {
    setTimeout(() => {
        document.getElementById(`${chosenFirstCard}-text`).style.animation = "hideText .5s";
        document.getElementById(`${chosenSecondCard}-text`).style.animation = "hideText .5s";

        setTimeout(() => {
            document.getElementById(`${chosenFirstCard}-text`).style.opacity = "0";
            document.getElementById(`${chosenSecondCard}-text`).style.opacity = "0";

            document.getElementById(`${chosenFirstCard}-text`).innerText = "?";
            document.getElementById(`${chosenSecondCard}-text`).innerText = "?";

            document.getElementById(`${chosenFirstCard}-text`).classList.remove(`${chosenFirstCard}-text`);
            document.getElementById(`${chosenSecondCard}-text`).classList.remove(`${chosenSecondCard}-text`);
            document.getElementById(`${chosenFirstCard}-text`).classList.add("cards-text");
            document.getElementById(`${chosenSecondCard}-text`).classList.add("cards-text");

            setTimeout(() => {
                document.getElementById(`${chosenFirstCard}-text`).style.animation = "showText .5s";
                document.getElementById(`${chosenSecondCard}-text`).style.animation = "showText .5s";
            }, 250);

            setTimeout(() => {
                document.getElementById(`${chosenFirstCard}-text`).style.opacity = "1";
                document.getElementById(`${chosenSecondCard}-text`).style.opacity = "1";

                for(let i=1;i<=8;i++) {
                    if(!cardsTexts[i-1].chosed) {
                        document.getElementById(`card${i}`).style.removeProperty("box-shadow");
                        document.getElementById(`card${i}`).style.cursor = "pointer";
                        document.getElementById(`card${i}`).addEventListener("click", showCard1);
                        document.getElementById(`card${i}`).addEventListener("mouseover", cardGlow);
                        document.getElementById(`card${i}`).addEventListener("mouseout", cardUnGlow);
                    }
                }
            }, 500);
        }, 500);
    }, 1000);
}

const finaleScreen = () => {
    setTimeout(() => {
        document.getElementById("part3-title").style.animation = "hideText 1s";
        document.getElementById("thirdExer").style.animation = "hideText 1s";
        setTimeout(() => {
            document.getElementById("part3-title").style.opacity = "0";
            document.getElementById("part3-title").style.display = "none";
    
            document.getElementById("thirdExer").style.opacity = "0";
            document.getElementById("thirdExer").style.display = "none";
    
            document.getElementById("lastPage").style.animation = "showText 1s";
    
            setTimeout(() => {
                document.getElementById("lastPage").style.opacity = "1";
                document.getElementById("lastPage").style.display = "block";

                document.getElementById("light").addEventListener("mouseover", showCredit);
                document.getElementById("light").addEventListener("mouseout", hideCredit);
            }, 1000);
        }, 1000);
    }, 1000);
}

const showCredit = () => {
    document.getElementById("part4-instruct4").style.animation = "showFinaleText 1s";
    setTimeout(() => {
        document.getElementById("part4-instruct4").style.right = "8vw";
    }, 1000);
}

const hideCredit = () => {
    document.getElementById("part4-instruct4").style.animation = "hideFinaleText 1s";
    setTimeout(() => {
        document.getElementById("part4-instruct4").style.right = "-50vw";
    }, 1000);
}