let inputField;
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');
var addButton = document.getElementById("button1");
var taskInput = document.getElementById("taskInput");

function addText(textInput) {
    inputField = textInput;
};

addButton.addEventListener("click", addTask);

taskInput.addEventListener("input", addText(this.value));
taskInput.addEventListener("focus", function clearText() { this.value='' });


function addTask() {
    if (inputField.length > 0) {
        var deleteButton = document.createElement('button');
        deleteButton.className = 'button2';
        deleteButton.appendChild(document.createTextNode("❌"));
        deleteButton.onclick = function deleteTask() {
            this.parentElement.remove();
        }
        var completeButton = document.createElement('button');
        completeButton.className = 'button2';
        completeButton.appendChild(document.createTextNode("✔️"));
        completeButton.onclick = function completeTask() {
            this.parentElement.style.textDecoration = "line-through";
        }
    }

    var li = document.createElement("li");
    li.innerHTML = '<span contenteditable="true">' + inputField + '</span>';
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    ul.appendChild(li);
    inputField = null;
    taskInput.value = '';
}