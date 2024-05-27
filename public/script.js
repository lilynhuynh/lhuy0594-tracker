const form = document.getElementById("msgForm");
const msgList = document.getElementById("msg-container");

var todayDate = new Date();
var todayDateStr = (todayDate.getMonth()+1)+"/"+(todayDate.getDate())+"/"+(todayDate.getFullYear());
document.getElementById("today-date").innerHTML = todayDateStr;

// Move form-header if mobile screen
console.log(screen.width)

function checkScreenSize(){
    if (screen.width <= 780) {
        var header = document.getElementById("form-header");
        var leftCol = msgForm.firstElementChild.firstElementChild;
        leftCol.insertBefore(header, leftCol.firstElementChild);
    }
}
checkScreenSize();
window.addEventListener("resize", checkScreenSize());

// Would You Rather Questions provided by Paired Magazine
const questionsList =
    `0,Would you rather have to go on 100 first dates or have to spend the rest of your life with your next date? ,100 First Dates,Forever With Next Date
    1,"Would you rather always know the truth no matter how painful or live in blissful ignorance?",Always Know Truth,Blissful Ignorance
    2,Would you rather have your art hung in a museum or have your portrait hung in a gallery?,Art in Museum,Portrait in Gallery
    3,Would you rather be known for being attractive or being funny?,Attractive,Funny
    4,Would you rather date someone with bad breath or BO?,Bad Breath,BO
    5,Would you rather be Batman or Superman?,Batman,Superman
    6,Would you rather experience the world beginning or ending?,Beginning,Ending
    7,Would you rather have the BFG’s ears or Pinocchio’s nose?,BFG's Ears,Pinocchio's Nose
    8,Would you rather live in a big city or in the countryside?,Big City,Country Side
    9,Would you rather be a bird or a cat?,Bird,Cat
    10,Would you rather have to use bubble wrap as your only form of transportation for a week or wear a traffic cone as a hat for a year?,Bubble Wrap for a Week,Traffic Cone for a Year
    11,Would you rather own only cats or only dogs?,Cats,Dogs
    12,Would you rather have the power to change the past or control the future?,Change Past,Control Future
    13,Would you rather have to eat every meal while doing the chicken dance or sing the ABCs after every sentence you speak?,Chicken Dance while Eating,Sing ABCs after Sentence
    14,Would you rather have a pet dinosaur that's as small as a chicken or a pet elephant the size of a cat?,Chicken-Sized Pet Dinosaur,Cat-Sized Pet Elephant
    15,Would you rather have to wear clown shoes for a month or a giant foam finger on your hand for a week?,Clown Shoes for a Month,Giant Foam Finger for a Week
    16,Would you rather eat cold pizza or hot cereal?,Cold Pizza,Hot Cereal
    17,Would you rather have the ability to change the color of your hair at will or the power to make inanimate objects come to life and chat with you?,Color of your Hair,Inanimate Objects to Life
    18,Would you rather be covered in hair or have no hair at all?,Covered in Hair,No Hair
    19,Would you rather live a life of adventure and excitement with occasional danger or a safe and predictable life?,Dangerous Adventurous Life,Safe Predictable Life
    20,Would you rather fart in an elevator or in an airplane?,Elevator,Airplane
    21,Would you rather have to communicate only in emojis for a day or speak in rhyme for a week?,Emojis for a Day,Rhymes for a Week
    22,Would you rather have the power to end world hunger or bring an end to all wars?,End World Hunger,End All Wars
    23,Would you rather have the power to erase all your past mistakes or learn from them and grow as a person?,Erase All Past Mistakes,Learn and Grow as Person
    24,Would you rather spend your life constantly exploring new places or build a deep sense of belonging in one location?,Explore New Places,Belonging At One Place
    25,Would you rather fall on stage at your graduation or forget your speech?,Fall at Graduation,Forget your Speech
    26,"Would you rather be famous and constantly in the public eye or live a quiet anonymous life?",Famous,Anonymous
    27,Would you rather be a famous artist or a famous athlete?,Famous Artist,Famous Athlete
    28,Would you rather eat only fast food or only healthy food forever?,Fast Food,Healthy Food
    29,Would you rather give up your favorite food or your favorite TV show?,Favorite Food,Favorite TV Show
    30,Would you rather have the ability to feel others' emotions intensely or have complete emotional detachment?,Feel Others' Emotions,Complete Emotional Detachment
    31,Would you rather have the strength to forgive any wrongdoing or the power to seek justice for all wrongs?,Forgive Any Wrongdoing,Power to Seek Justice
    32,Would you rather skip Halloween or Christmas?,Halloween,Christmas
    33,Would you rather have a pet hedgehog that can predict the future but only tells you vague and cryptic predictions or a pet owl that delivers letters but keeps getting lost?,Hedgehog,Owl
    34,Would you rather have the hiccups for the rest of your life or always feel as though you’re about to sneeze?,Hiccups,Sneeze
    35,Would you rather be homeless or in prison?,Homeless,In Prison
    36,Would you rather have a partner who is always honest but critical or one who tells white lies to spare your feelings?,Honest,White Lies
    37,Would you rather watch horror movies or cartoons?,Horror Movies,Cartoons
    38,Would you rather hug or hold hands?,Hug,Hold Hands
    39,Would you rather delete Instagram or TikTok?,Instagram,TikTok
    40,Would you rather have to communicate solely through interpretive dance for a day or speak only in puns for a week?,Interpretive Dance,Speak in Puns
    41,"Would you rather be able to turn invisible but only when no one is looking or have the ability to teleport but only to places you've never been before?",Invisible,Teleport
    42,Would you rather have an Irish accent or an English accent?,Irish Accent,English Accent
    43,Would you rather kiss a stranger or marry your friend?,Kiss A Stranger,Marry Your Friend
    44,Would you rather be the last person on earth or the first person on earth?,Last Person,First Person
    45,"Would you rather not be able to control your laughter or not be able to control your tears?",Laughter,Tears
    46,Would you rather be loved or respected?,Loved,Respected
    47,Would you rather have a magic remote control that can pause or rewind real-life moments or a magic microwave that can instantly heat any food?,Magic Remote Control,Magic Microwave
    48,Would you rather have a flying carpet that constantly malfunctions and drops you from the sky or a magic carpet that only takes you to places you have no interest in visiting?,Malfunctioning Flying Carpet,Random Magic Carpet
    49,Would you rather be followed by a marching band wherever you go or have a constant entourage of enthusiastic mimes?,Marching Band,Enthusiastic Mimes
    50,Would you rather have to wear mismatched shoes for a month or a suit made entirely of duct tape for a week?,Mismatched Socks,Duct Tape
    51,Would you rather have money to burn or time to kill?,Money to Burn,Time to Kill
    52,Would you rather be good at playing every musical instrument or good at singing?,Musical Instrument,Singing
    53,Would you rather lose your Netflix subscription or your Spotify premium?,Netflix,Spotify
    54,Would you rather play a game of Never Have I Ever or Truth or Dare?,Never Have I Ever,Truth or Dare
    55,Would you rather have a never-ending sneeze or an uncontrollable urge to dance whenever you hear music?,Never-Ending Sneeze,Uncontrollable Urge to Dance
    56,Would you rather live in New York or in LA?,New York,LA
    57,Would you rather have no baths for a month or no internet for a month?,No Baths,No Internet
    58,Would you rather have the wisdom of old age with the body of a young person or the youthful energy with the mind of an elder?,Old Wisdom with Young Body,Youthful Energy with Old Mind
    59,Would you rather fight one hundred chicken-sized cows or one cow-sized chicken?,One Hundred Chicken-Sized Cows,One Cow-Sized Chicken
    60,Would you rather date someone you met online or who your friend introduced you to?,Online,Introduced by Friend
    61,Would you rather be the only one drunk at a party or the only one sober?⁠,Only One Drunk,Only One Sober
    62,"Would you prefer to be the only one laughing at someone or the only one being laughed at?",Only One Laughing,Only One Laughed At
    63,Would you rather eat nothing but salad or nothing but dessert for a month?,Only Salad,Only Dessert
    64,Would you rather have a pet parrot that only repeats embarrassing moments from your past or a pet squirrel that steals your socks every day?,Parrot,Squirrel
    65,Would you rather have a pet penguin that constantly slides on your floors or a pet kangaroo that tries to put everything in its pouch?,Penguin,Kangaroo
    66,"Would you rather have a personal cloud that rains on you wherever you go or a personal spotlight that follows you around making you the center of attention?",Personal Cloud,Personal Spotlight
    67,"Would you rather have a personal theme song that plays whenever you walk into a room or have your own laugh track following your jokes?",Personal Theme Song,Personal Laugh Track
    68,Would you rather have a photographic memory or have the memory of a goldfish?,Photographic Memory,Goldfish Memory
    69,Would you rather have to talk like a pirate for a day or speak in a Shakespearean accent for a week?,Pirate ,Shakespearean
    70,Would you rather eat pizza or ice cream as the only food for the rest of your life?,Pizza,Ice Cream
    71,Would you rather have the power to heal any physical ailment or mend emotional wounds?,Power to Heal,Mend Emotional Wounds
    72,Would you rather know the ultimate purpose of your life or have the freedom to create your own purpose?,Purpose of Life,Freedom of Own Purpose
    73,Would you rather be able to read people’s minds or tell the future?,Read Minds,Tell the Future
    74,Would you rather be able to read minds but can't turn it off or never be able to lie?,Read Minds,Never Lie
    75,Would you rather be able to relive your favorite memories at will or have the ability to foresee and prevent future disasters?,Relive Favorite Memories,Foresee Future Disasters
    76,Would you rather always remember your dreams in vivid detail or be able to enter and control your dreams at will?,Remember Dreams Vividly,Enter and Control Dreams
    77,Would you rather have the ability to instantly resolve any conflict or prevent all conflicts from ever occurring?,Resolve,Prevent
    78,Would you rather go on a road trip or go backpacking?,Road Trip,Backpacking
    79,Would you rather always go to the same holiday resort or never be able to return to a resort you liked?,Same Holiday Resort,Never Return to Favorite Resort
    80,Would you rather wear the same socks for a month or the same underwear for a week?,Same Socks for a Month,Same Underwear for a Week
    81,Would you rather listen to the same song forever or only be able to watch the same movie forever?,Same Song Forever,Same Movie Forever
    82,Would you rather lose your sight or your memories?,Sight Loss,Memory Loss
    83,Would you rather be the smartest person in the room or the funniest person in the room?,Smartest,Funniest
    84,Would you rather smell like onions or have permanent garlic breath?,Smell like Onions,Permanent Garlic Breath
    85,Would you rather drink sour milk or eat moldy bread?,Sour Milk,Moldy Bread
    86,Would you rather only be able to speak in riddles or have to sing every sentence?,Speak in Riddles,Sing Every Sentence
    87,"Would you rather be able to speak to animals but they all have annoying voices or be able to speak any language but only while wearing a chicken costume?",Speak to Animals with Annoying Voices,Speak any Language only with Chicken Costume
    88,Would you prefer to be remembered as successful or as kind?,Successful,Kind
    89,"Would you rather have a successful career but limited time for family or a less successful career with more time for each other and your future family?",Successful Career but Limited Family Time,Less Successful Career but More Family Time
    90,Would you rather meet Taylor Swift or Harry Styles?,Taylor Swift ,Harry Styles
    91,Would you rather be able to teleport or fly?,Teleport,Fly
    92,Would you rather have ten close friends or one best friend?,Ten Close Friends,One Best Friend
    93,Would you rather have the ability to time travel to the past or see into the future? Why?,Time Travel to Past,See Into Future
    94,Would you rather always have to wear a tinfoil hat to protect yourself from aliens or have to wear a traffic cone as a hat for a year?,Tinfoil Hat,Traffic Cone Hat
    95,Would you rather run out of toilet paper every time you go or only be allowed to use kitchen paper to dry yourself after a shower?,Toilet Paper,Kitchen Paper
    96,Would you rather share your toothbrush or your towel?,Toothbrush,Towel
    97,Would you rather find true love or win the lottery?,True Love,Lottery
    98,Would you rather always be underdressed or always be overdressed?,Underdressed,Overdressed
    99,Would you rather go on a date to a water park or a theme park?,Water Park,Theme Park
    100,Would you rather have a head the size of a watermelon or a golf ball?,Watermelon-Sized Head,Golfball-Sized Head
    101,Would you rather as weird dreams or never be able to dream again?,Weird Dreams,Never Dream Again
    102,Would you rather only be able to whisper or only be able to shout?,Whisper,Shout
    103,Would you rather win a million dollars or earn a million dollars?,Win Million Dollars,Earn Million Dollars
    104,Would you rather date someone younger than you or older than you?,Younger,Older
    105,"Would you rather get stuck in an elevator with your ex and their partner or with your partner and their ex?",Your Ex,Your Partner`;

var stamp = document.getElementById("stamp-icon");
stamp.src = generateStamp();
generateQuestion();
updateLog();

class Messages {
    constructor() {
        this.listOfMsgs = []
    }

    addMsg(name, feeling, affirmation, goal, answer, question, id, date) {
        var newMsg = new Message(name, feeling, affirmation, goal, answer, question, id, date)
        this.listOfMsgs.push(newMsg)
        this.sendMsg();

        setTimeout(function() {
            let removeStamp = document.getElementById("form-header");
            removeStamp.removeChild(document.getElementById("send-stamp"));
            form.reset()
            console.log("form reseted")
            console.log("stamp removed")
            generateQuestion()
            var stamp = document.getElementById("stamp-icon");
            stamp.src = generateStamp();
        }, 1000);

        let storeMsg = JSON.parse(localStorage.getItem("storeMsg"))
        if (storeMsg === null || !(Array.isArray(storeMsg))) {
            console.log("init array")
            storeMsg = new Array(newMsg)
        } else {
            console.log("add to array")
            storeMsg.push(newMsg);
        }
        localStorage.setItem("storeMsg", JSON.stringify(storeMsg));
        updateLog();
    }

    sendMsg() {
        let send = document.createElement("img");
        send.id = "send-stamp";
        send.src = require("../static/sent.png");
        console.log (stamp);

        let grabStamp = document.getElementById("stamp-icon");
        grabStamp.after(send);
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
    listMsgs.addMsg(msgName, msgFeel, msgAffirm, msgGoal, msgAnswer, msgQuestion, msgId, msgDate);
    window.scrollTo({top: 0, behavior: "smooth"});
})

function generateStamp(){
    var index = JSON.parse(localStorage.getItem("storeStamp")) || 0;
    const stamp1 = require("../static/stamp1.png");
    const stamp2 = require("../static/stamp2.png");
    const stamp3 = require("../static/stamp3.png");
    const stamp4 = require("../static/stamp4.png");
    const stamp5 = require("../static/stamp5.png");
    const stamp6 = require("../static/stamp6.png");
    const stamp7 = require("../static/stamp7.png");
    const stamp8 = require("../static/stamp8.png");
    const stamp9 = require("../static/stamp9.png");
    const stamps = [stamp1, stamp2, stamp3, stamp4, stamp5, stamp6, stamp7, stamp8, stamp9];

    if (index == stamps.length){
        index = 0;
    }
    localStorage.setItem("storeStamp", JSON.stringify(index+1));
    return stamps[index];
}

function generateQuestion() {
    var index = JSON.parse(localStorage.getItem("storeQues")) || 0;
    var lines = questionsList.split("\n");
    let prompt = [];
    if (index >= lines.length) {
        index = 0;
    }
    var line = lines[index].trim();
    prompt = line.split(",");
    localStorage.setItem("storeQues", JSON.stringify(index + 1));

    var changePrompt = document.getElementById("questionPrompt");
    var changeChoiceAVal = document.getElementById("choiceA");
    var changeChoiceATxt = document.getElementById("choiceATxt");
    var changeChoiceBVal = document.getElementById("choiceB");
    var changeChoiceBTxt = document.getElementById("choiceBTxt");

    changePrompt.innerText = prompt[1];
    changeChoiceAVal.value = prompt[2];
    changeChoiceATxt.innerHTML = prompt[2];
    changeChoiceBVal.value = prompt[3];
    changeChoiceBTxt.innerHTML = prompt[3];
}

function generateCardImg(){
    var index = JSON.parse(localStorage.getItem("storeCardImg")) || 0;
    const card1 = require("../static/card1.png");
    const card2 = require("../static/card2.png");
    const card3 = require("../static/card3.png");
    const card4 = require("../static/card4.png");
    const card5 = require("../static/card5.png");
    const card6 = require("../static/card6.png");
    const cards = [card1, card2, card3, card4, card5, card6];
    if (index == cards.length){
        index = 0;
    }
    localStorage.setItem("storeCardImg", JSON.stringify(index+1));
    return cards[index];
}

const logInteraction = (e) => {
    if (e.target.matches('img')){
        console.log("btn detected")
        const parent = e.target.parentElement.parentElement.parentElement.parentElement;
        if (parent !== null) {
            console.log(parent.className, parent.id);
            parent.remove();

            let test = JSON.parse(localStorage.getItem('storeMsg'))
            if (test !== null && Array.isArray(test)) {
                test.forEach((msg) => {
                    if (msg.id == parent.id) {
                        let removeIdx = test.indexOf(msg)
                        console.log(removeIdx)
                        test.splice(removeIdx, 1)
                    }
                })
            }
            localStorage.setItem("storeMsg", JSON.stringify(test))
            updateLog();
        }
    } else {
        console.log("card clicked");
        let elem = e.target
        let getMsg;
        switch (elem.className){
            case "card-front":
                console.log("front clicked");
                getMsg = elem.parentElement.parentElement.id;
                break;
            case "name":
                console.log("name clicked");
                getMsg = elem.parentElement.parentElement.parentElement.parentElement.id;
                break;
            case "date":
                console.log("date clicked");
                getMsg = elem.parentElement.parentElement.parentElement.parentElement.id;
                console.log(getMsg);
                break;
            case "card-preview":
                console.log("preview clicked");
                getMsg = elem.parentElement.parentElement.parentElement.id;
                break;
            default:
                console.log("not included");
                break;
        }
        console.log(getMsg)
        let msgInfo = JSON.parse(localStorage.getItem("storeMsg"));
        
        if (msgInfo !== null && Array.isArray(msgInfo)) {
            msgInfo.forEach((msg) => {
                if (msg.id == getMsg) {
                    let popup = document.createElement("div");
                    popup.className = "overlay";
                    popup.id = "card-popup";
                    let container = document.createElement("div");
                    container.className = "form-container";

                    if (screen.width <= 780){
                        container.innerHTML =
                        `<div class="form-col-left">
                            <div class="form-row" id="popup-header">
                                <p class="popup-head" style="float: left">${msg.date}</p>
                                <img id="stamp-icon" style="float: right;" src="${generateStamp()}"/>
                                <img id="send-stamp" style="float: right;" src="${require("../static/sent.png")}">
                            </div>
                            <div class="form-row" id="popup-msg">
                                <p class="popup-head">From ${msg.name},</p>
                                <p class="popup-text">Today, I feel <strong>${msg.feeling}</strong>.</p>
                                <p class="popup-text"><strong>My daily affirmation is: </strong>${msg.affirmation}</p>
                                <p class="popup-text"><strong>My goal today is: </strong>${msg.goal}</p>
                            </div>
                        </div>
                        <div class="form-col-right">
                            <div class="form-row">
                                <h5 class="popup-head">Would You Rather?</h5>
                                <p class="popup-text">${msg.question}</p>
                                <p class="popup-text"><strong>Answer: </strong>${msg.answer}</p>
                            </div>
                            <button class="return">Return to Home</button>
                        </div>`;
                    }
                    else {
                        container.innerHTML =
                        `<div class="form-col-left">
                            <div class="form-row" id="popup-msg">
                                <p class="popup-head">From ${msg.name},</p>
                                <p class="popup-text">Today, I feel <strong>${msg.feeling}</strong>.</p>
                                <p class="popup-text"><strong>My daily affirmation is: </strong>${msg.affirmation}</p>
                                <p class="popup-text"><strong>My goal today is: </strong>${msg.goal}</p>
                            </div>
                        </div>
                        <div class="form-col-right">
                            <div class="form-row" id="popup-header">
                                <p class="popup-head" style="float: left">${msg.date}</p>
                                <img id="stamp-icon" style="float: right;" src="${generateStamp()}"/>
                                <img id="send-stamp" style="float: right;" src="${require("../static/sent.png")}">
                            </div>
                            <br><br><br><br>
                            <div class="form-row">
                                <h5 class="popup-head">Would You Rather?</h5>
                                <p class="popup-text">${msg.question}</p>
                                <p class="popup-text"><strong>Answer: </strong>${msg.answer}</p>
                            </div>
                            <button class="return">Return to Home</button>
                        </div>`;
                    }
                    
                    popup.appendChild(container);
                    let add = document.getElementById("msg-container");
                    add.after(popup);
                }
            });
        }
    }
};

const closePopup = (e) => {
    let secLastChild = document.body.lastElementChild.previousElementSibling;
    if (secLastChild.className == "overlay"){
        if (e.target.matches("button")){
            let popup = document.getElementById("card-popup");
            document.body.removeChild(popup)
        }
    } else {
        return;
    }
};

msgList.addEventListener('click', logInteraction);
document.body.addEventListener('click', closePopup);

function updateLog() {
    msgList.innerHTML = ""

    let diaryLog = JSON.parse(localStorage.getItem("storeMsg"))

    if (diaryLog !== null && Array.isArray(diaryLog)) {
        diaryLog.forEach((msg) => {
            var msgData = document.createElement("div")
            msgData.id = msg.id
            msgData.className = "card-container"
            msgData.innerHTML =
                `
            <div class= "card-inner">
                <div class="card-front" style="background-image: url(${generateCardImg()})">
                    <button class="delete-btn" title="Remove Message?">
                        <img src="${require("../static/thumbtack.png")}" id="tack"/>
                    </button>
                    <div class="card-preview">
                        <p class="name">${msg.name}</p>
                        <p class="date">${msg.date}</p>
                    </div>
                </div>
            </div>
            `
            msgList.append(msgData)
        });
    }
}

console.log("executed")

