// Create an object called 'task'
// Populate the properties based on the provided data model

// let task = {
//   name: "Initial Sketches",
//   type: "Concept Ideation",
//   id: Date.now(),
//   date: new Date().toISOString(),
//   rate: 35,
//   time: 5,
//   client: "Google"
// }

// console.log(task);

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

// let taskList = [];

// function addTask(name, type, rate, time, client){
//   task.name = name;
//   task.type = type;
//   task.rate = rate;
//   task.time = time;
//   task.client = client;
//   taskListEx.push(task);
// }

// Call the function with test values for the input paramaters
// addTask("Home page design", "Wireframe Design", 50, 3, "Goldman Sachs");
// addTask("Backend dev", "Application Coding", 80, 10, "Meta");
// addTask("Database testing", "Testing/Debugging", 60, 20, "Some tech company idk");

// Log the array to the console.
// for (i = 0; i < taskList.length; i++){
//   console.log(taskList[i]);
// }

// CLASS EXAMPLE

// class TasksList extends Task{
//   constructor(taskList){
//     this.taskList = taskList;
//   }

//   addTask(){
//     taskList.push();
//   }

//   showTasks(){
//     return this.taskList;
//   }
// }


// class Task{
//   constructor(name, type, id = Date.now(), date = new Date.toISOString(), rate, time, client){
//     this.name = name;
//     this.type = type;
//     this.id = id;
//     this.date = date;
//     this.rate = rate;
//     this.time = time;
//     this.client = client;
//   }

//   newTask(name, type, rate, time, client){
//     this.name = name;
//     this.type = type;
//     this.rate = rate;
//     this.time = time;
//     this.client = client;
//   }
// }

// let newTaskList = [];
// var myList = new TasksList(newTaskList);
// var task1 = new Task("Task 1", "Type 1", 10, 5, "Client 1");
// var task2 = new Task("Task 2", "Type 1", 20, 10, "Client 2");

// myList.addTask(task1);
// myList.addTask(task2);

// console.log(myList.showTasks());

const form = document.getElementById("taskForm")
const taskList = document.getElementById("taskList")

class Tasks {
    constructor() {
        this.listOfTasks = []
    }

    addTask(name, type, rate, time, client) {
        var newTask = new Task(name, type, rate, time, client)
        this.listOfTasks.push(newTask)
        this.displayTask(newTask)
    }

    displayTask(task) {
        let item = document.createElement("li")
        item.id = 'data-id'
        item.innerHTML = `<p><strong>${task.name}</strong><br></br>${task.type}</p>`
        taskList.appendChild(item)
        form.reset()

        let delButton = document.createElement("button")
        let delButtonText = document.createTextNode("Delete")
        delButton.appendChild(delButtonText)
        item.appendChild(delButton)

        delButton.addEventListener("click", function (event) {
            item.remove()
            listOfTasks = listOfTasks.filter(task => task.id !== item.getAttribute('data-id'))
            console.log(listOfTasks)
        })
    }
}

class Task {
    constructor(name, type, rate, time, client) {
        this.name = name
        this.type = type
        this.rate = rate
        this.time = time
        this.client = client
    }
}

var listTasks = new Tasks

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var taskName = form.elements.taskName.value
    var taskType = form.elements.taskType.value
    var taskRate = form.elements.taskRate.value
    var taskTime = form.elements.taskTime.value
    var taskClient = form.elements.taskClient.value
    listTasks.addTask(taskName, taskType, taskRate, taskTime, taskClient)
    console.log(listTasks.listOfTasks)
})