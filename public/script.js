const form = document.getElementById("msgForm")
const msgList = document.getElementById("msgList")

var todayDate = new Date();
var todayDateStr = todayDate.toLocaleString();
document.getElementById("today-date").innerHTML = todayDateStr

class Messages {
    constructor() {
        this.listOfMsgs = []
    }

    addMsg(name, feeling, affirmation, goal, answer, question, id) {
        var newMsg = new Message(name, feeling, affirmation, goal, answer, question, id)
        this.listOfMsgs.push(newMsg)
        this.displayMsg(newMsg)
    }

    displayMsg(msg) {
        let item = document.createElement("li")
        item.id = "msg-card"

        var msgCard = document.createElement("div")
        msgCard.id = msg.id
        msgCard.class = "container"


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
        item.append(msgCard)
        msgList.appendChild(item)
        form.reset()

        let delButton = document.createElement("button")
        let delButtonText = document.createTextNode("Delete")
        delButton.appendChild(delButtonText)
        item.appendChild(delButton)

        delButton.addEventListener("click", function (event) {
            item.remove()
            listOfMsgs = listOfMsgs.filter(msg => msg.id !== item.getAttribute('msg-card'))
            console.log(listOfMsgs)
        })
    }
}

class Message {
    constructor(name, feeling, affirmation, goal, answer, question, id) {
        this.name = name
        this.feeling = feeling
        this.affirmation = affirmation
        this.goal = goal
        this.answer = answer
        this.question = question
        this.id = id
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
    console.log(document.getElementById("questionPrompt").innerText)
    var msgQuestion = document.getElementById("questionPrompt").innerText
    var msgId = Math.floor(Math.random() * Date.now())
    console.log(msgName, msgFeel, msgAffirm, msgGoal, msgAnswer, msgQuestion, msgId)
    listMsgs.addMsg(msgName, msgFeel, msgAffirm, msgGoal, msgAnswer, msgQuestion, msgId)
    console.log(listMsgs.listOfMsgs)
})

// Would You Rather Questions provided by Paired Magazine
var questionList =
    {
        question0:["Would you rather eat pizza or ice cream as the only food for the rest of your life?",
            "Pizza",
            "Ice Cream"
        ],
        question1:["Would you rather go on a date to a water park or a theme park?",
            "Water Park",
            "Theme Park"
        ]
    }

console.log(questionList)

function generateQuestion(){
    var questionGenerator = String(Math.floor(Math.random(1)));
    var questionStr = "question" + questionGenerator;

    var chosenQuestion = questionList[questionStr]
    if (chosenQuestion == "null"){
        console.log("No more questions left!")
    }
    console.log(chosenQuestion)

    var changePrompt = document.getElementById("questionPrompt");
    changePrompt.innerText = chosenQuestion[0];
    console.log(changePrompt.innerText)

    var changeChoiceAVal = document.getElementById("choiceA");
    changeChoiceAVal.value = chosenQuestion[1];
    
    var changeChoiceATxt = document.getElementById("choiceATxt");
    changeChoiceATxt.innerHTML = chosenQuestion[1];

    var changeChoiceBVal = document.getElementById("choiceB");
    changeChoiceBVal.value = chosenQuestion[2];

    var changeChoiceBTxt =document.getElementById("choiceBTxt");
    changeChoiceBTxt.innerHTML = chosenQuestion[2];

    delete questionList[questionStr];
    console.log(questionList)
}
window.onload = generateQuestion();

console.log("executed")