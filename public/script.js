// localStorage.removeItem("storeMsg")

const form = document.getElementById("msgForm")
const msgList = document.getElementById("msgList")

var todayDate = new Date();
var todayDateStr = todayDate.toLocaleString();
document.getElementById("today-date").innerHTML = todayDateStr

class Messages {
    constructor() {
        this.listOfMsgs = []
    }

    addMsg(name, feeling, affirmation, goal, answer, question, id, date) {
        var newMsg = new Message(name, feeling, affirmation, goal, answer, question, id, date)
        this.listOfMsgs.push(newMsg)
        this.displayMsg(newMsg)
        
        let storeMsg = JSON.parse(localStorage.getItem("storeMsg"))
        if (storeMsg === null){
            console.log("init array")
            storeMsg = new Array(newMsg)
        } else {
            console.log("add to array")
            storeMsg.push(newMsg);
        }
        localStorage.setItem("storeMsg", JSON.stringify(storeMsg));
        updateLog();
    }

    displayMsg(msg) {

        // let item = document.createElement("li")
        // item.id = "msg-card"
        var msgCard = document.createElement("div")
        msgCard.id = msg.id
        msgCard.className = "container"

        // // Left side of the card
        // var cardLeft = document.createElement("div")
        // cardLeft.className = "form-col-left"
        // msgCard.appendChild(cardLeft)

        // var nameRow = document.createElement("div")
        // nameRow.class = "form-row"
        // cardLeft.appendChild(nameRow)

        // var partnerName = document.createElement("p")
        // partnerName.innerText = `From: ${msg.name}`
        // nameRow.appendChild(partnerName)

        msgCard.innerHTML =
            `
            <div class="form-col-left">
                <div class="form-row">
                    <p>From ${msg.name}</p>
                </div>
                <div class="form-row">
                    <p>Today, I feel ${msg.feeling}</p>
                </div>
                <div class="form-row">
                    <p>My daily affirmation is</p>
                    <p>${msg.affirmation}</p>
                </div>
                <div class="form-row">
                    <p>My goal today is</p>
                    <p>${msg.goal}</p>
                </div>
            </div>
            <div class="form-col-right">
                <p>${msg.date}</p>
                <h5>Would You Rather?</h5>
                <p>${msg.question}</p>
                    <p>${msg.answer}</p>
            </div>
            `

        console.log(msgCard)
        // item.append(msgCard)
        // msgList.appendChild(item)
        form.reset()

        let delButton = document.createElement("button")
        let delButtonText = document.createTextNode("Delete")
        delButton.appendChild(delButtonText)
        msgCard += delButton

        delButton.addEventListener("click", function (event) {
            listOfMsgs = listOfMsgs.filter(msg => msg.id !== msgCard.getAttribute('msg-card'))
            console.log(listOfMsgs)
        })

        // if (!JSON.parse(localStorage.getItem("diaryLog"))) {
        //     localStorage.setItem("diaryLog", JSON.parse(JSON.stringify([msgCard])))
        // } else {
        //     var localStorageData = JSON.parse(localStorage.getItem("diaryLog"));
        //     localStorageData.push(msgCard);
        //     localStorage.setItem("diaryLog", JSON.parse(JSON.stringify(localStorageData)))
        // }
        // let storeMsg = JSON.parse(localStorage.getItem("storeMsg"))
        // if (storeMsg == null){
        //     storeMsg = [msgCard];
        // } else {
        //     storeMsg.push(msgCard);
        // }
        // let convertMsg = JSON.parse(JSON.stringify(cardMsg))
        // localStorage.setItem("storeMsg", );
        // updateLog();
    }

}

class Message {
    constructor(name, feeling, affirmation, goal, answer, question, id, date) {
        this.name = name
        this.feeling = feeling
        this.affirmation = affirmation
        this.goal = goal
        this.answer = answer
        this.question = question
        this.id = id
        this.date = date
    }
}

var listMsgs = new Messages()

form.addEventListener("submit", function (event) {
    console.log("submit detected")
    event.preventDefault();
    var msgName = form.elements.partnerName.value
    var msgFeel = form.elements.partnerFeeling.value
    var msgAffirm = form.elements.partnerAffirmation.value
    var msgGoal = form.elements.partnerGoal.value
    var msgAnswer = form.querySelector('input[name="partnerQuestion"]:checked').value
    var msgQuestion = document.getElementById("questionPrompt").innerText
    var msgId = Math.floor(Math.random() * Date.now())
    var msgDate = document.getElementById("today-date").innerText
    listMsgs.addMsg(msgName, msgFeel, msgAffirm, msgGoal, msgAnswer, msgQuestion, msgId, msgDate)
    console.log(listMsgs.listOfMsgs)
})

// insane question list
// Would You Rather Questions provided by Paired Magazine
var questionList =
    {
        question0:[
            "Would you rather eat pizza or ice cream as the only food for the rest of your life?",
            "Pizza",
            "Ice Cream"
        ],
        question1:[
            "Would you rather go on a date to a water park or a theme park?",
            "Water Park",
            "Theme Park"
        ],
        question2:[
            "Would you rather give up your favorite food or your favorite TV show?",
            "Favorite Food",
            "Favorite TV Show"
        ],
        question3:[
            "Would you rather find true love or win the lottery?",
            "True Love",
            "Lottery"
        ],
        question4:[
            "Would you rather date someone with bad breath or BO?",
            "Bad Breath",
            "BO"
        ]
    }


function generateQuestion(){
    var questionGenerator = String(Math.floor(Math.random(questionList.length)));
    var questionStr = "question" + questionGenerator;

    var chosenQuestion = questionList[questionStr]
    if (chosenQuestion == "null"){
        console.log("No more questions left!")
    }

    var changePrompt = document.getElementById("questionPrompt");
    changePrompt.innerText = chosenQuestion[0];

    var changeChoiceAVal = document.getElementById("choiceA");
    changeChoiceAVal.value = chosenQuestion[1];
    
    var changeChoiceATxt = document.getElementById("choiceATxt");
    changeChoiceATxt.innerHTML = chosenQuestion[1];

    var changeChoiceBVal = document.getElementById("choiceB");
    changeChoiceBVal.value = chosenQuestion[2];

    var changeChoiceBTxt = document.getElementById("choiceBTxt");
    changeChoiceBTxt.innerHTML = chosenQuestion[2];

    delete questionList[questionStr];
}

updateLog()

let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    localStorage.removeItem('storeMsg');
    updateLog();
})

// Load data from local storage test
function updateLog(){
    msgList.innerHTML = ""

    console.log(localStorage.getItem("storeMsg"))
    let diaryLog = JSON.parse(localStorage.getItem("storeMsg"))

    if (diaryLog !== null) {
        diaryLog.forEach((msg) => {
            let item = document.createElement("li")
            
            var msgData = document.createElement("div")
            msgData.id = msg.id
            msgData.className = "container"
            msgData.innerHTML =
                `
                <div class="form-col-left">
                    <div class="form-row">
                        <p>From ${msg.name}</p>
                    </div>
                    <div class="form-row">
                        <p>Today, I feel ${msg.feeling}</p>
                    </div>
                    <div class="form-row">
                        <p>My daily affirmation is</p>
                        <p>${msg.affirmation}</p>
                    </div>
                    <div class="form-row">
                        <p>My goal today is</p>
                        <p>${msg.goal}</p>
                    </div>
                </div>
                <div class="form-col-right">
                    <p>${msg.date}</p>
                    <h5>Would You Rather?</h5>
                    <p>${msg.question}</p>
                        <p>${msg.answer}</p>
                </div>
                `
            item.appendChild(msgData)
            msgList.appendChild(item)
        });
    }
}

console.log("executed")
