let tasks = [{
    id:"task0",
    name: "Breakfast",
    isFinished: false,
    },
    {   
        id: "task1",
        name: "Market",
        isFinished: false,  
    },

    {   id: "task2",
        name: "Shopping",
        isFinished: false,  
    },
    {
        id: "task3",
        name: "Bank",
        isFinished: false,  
    },
    {
        id: "task4",
        name: "Dry Cleaning",
        isFinished: false,  
    },
    {
        id: "task5",
        name: "Bike Repair",
        isFinished: false,  
    }
];

var reRender = () => {
    let body = "";
    if(tasks.length){
    for(let i=0; i<tasks.length; i++){
        body+= `<div class="checkBoxes"><input type="checkbox" id="${tasks[i].name}" value="${tasks[i].name}" onclick="changeText(${i})"><h3 id ="${tasks[i].name}Text">${tasks[i].name}</h3><button onclick="deleteIndex(${i})">Delete</button></div>`;
        }
    }else{
        body = "<h1>ToDo List Completed</h1>"
    }
        document.querySelector(".container").innerHTML = body;

    }
reRender();

function changeText(index){
    var text = document.getElementById(`${tasks[index].name}Text`);
    if(document.getElementById(`${tasks[index].name}`).checked){
        text.style.textDecoration = "line-through";
    }
    else{
        text.style.textDecoration = "none";
    }
}

function deleteIndex(index) {
    tasks.splice(index, 1);
    reRender();
}
