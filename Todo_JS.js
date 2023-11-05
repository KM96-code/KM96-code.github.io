let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

function addTask(){
    let taskText= taskInput.value;
    if(taskText.trim() !== ""){
        let taskItem= document.createElement("div");

        //create checkboxes for each task
            let checkboxes=document.createElement("input");
            checkboxes.type="checkbox";

            let label=document.createElement("label");
            label.textContent=taskText;
        
        taskItem.appendChild(checkboxes);
        taskItem.appendChild(label);
        //taskItem.textContent=taskText;
        taskList.appendChild(taskItem);
        taskInput.value="";
        //click to mark complete
        taskItem.addEventListener("click", function(){
            this.classList.toggle("completed");
        });
    };

}
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        addTask();
    }
})
