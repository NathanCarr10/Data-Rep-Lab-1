//creating an array of strings

let Tasks = [];

//b. creating addTask Function
let addTask = (task)=>{

    Tasks.push(task);
    console.log(task + "has been added to my Tasks");
    return Tasks.lenght;
}



// c. creating a listAllTasks function:

let listAllTasks = (task)=>{

    Tasks.forEach((element)=>{
        console.log(element);
    })
}

//creating a delete task function 
let deleteTask = (task)=>{

    let index = Tasks.indexOf(task);
    if(index > -1){

        Tasks.splice(index,1);
        console.log(task+ " has been deleted from my tasks");
        }

        else {

            console.log(task+ " not found in array");

        }

        return Tasks.lenght;

}

//adding tasks to array and outputting values
addTask("Work ");
addTask("Eat ");
addTask("Sleep ");
listAllTasks();
deleteTask("Work ");
deleteTask("Play ");



