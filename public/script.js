const form = document.getElementById("msgForm")
const msgList = document.getElementById("msgList")

class Messages {
    constructor() {
        this.listOfMsgs = []
    }

    addMsg(name, feeling, affirmation, goal, question) {
        var newMsg = new Message(name, feeling, affirmation, goal, question)
        this.listOfMsgs.push(newMsg)
        this.displayMsg(newMsg)
    }

    displayMsg(msg) {
        let item = document.createElement("li")
        item.id = 'msg-item'
        item.innerHTML = `<p><strong>${msg.name}</strong><br></br>${msg.feeling}</p>`
        msgList.appendChild(item)
        form.reset()

        let delButton = document.createElement("button")
        let delButtonText = document.createTextNode("Delete")
        delButton.appendChild(delButtonText)
        item.appendChild(delButton)

        delButton.addEventListener("click", function (event) {
            item.remove()
            listOfMsgs = listOfMsgs.filter(msg => msg.id !== item.getAttribute('msg-item'))
            console.log(listOfMsgs)
        })
    }
}

class Message {
    constructor(name, feeling, affirmation, goal, question) {
        this.name = name
        this.feeling = feeling
        this.affirmation = affirmation
        this.goal = goal
        this.question = question
    }
}

var listMsgs = new Messages
// var todayDate = new Date();
// var todayDateStr = todayDate.toLocaleString();
// document.getElementById("today-date").innerHTML = todayDateStr

form.addEventListener("submit", function (event) {
    console.log("submit detected")
    event.preventDefault();
    var msgName = form.elements.partnerName.value
    var msgFeel = form.elements.partnerFeeling.value
    var msgAffirm = form.elements.partnerAffirmation.value
    var msgGoal = form.elements.partnerGoal.value
    var msgQuestion = form.querySelector('input[name="partnerQuestion"]:checked').value
    console.log(msgName, msgFeel, msgAffirm, msgGoal, msgQuestion)
    listMsgs.addMsg(msgName, msgFeel, msgAffirm, msgGoal, msgQuestion)
    console.log(listMsgs.listOfMsgs)
})

console.log("executed")