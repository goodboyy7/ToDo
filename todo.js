var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById('todoInput');
var dueDate = document.getElementById('dueDate');

function markAsInProgress(event){
	event.target.parentElement.id = "markAsInProgress";
}

function markAsDone(event){
	//event.target.previousSibling.previousSibling.previousSibling.classList.remove("markAsInProgress");
	event.target.parentElement.id = "markAsDone";
}

function markAsX(event){
	var toDoMain = event.target.parentElement;
	toDoMain.parentElement.removeChild(toDoMain);
	//console.log(event.target.parentElement.childNodes.length);
}

function editDone(event){
	var edit = event.target.parentElement;
	var text = edit.childNodes[0].value;
	if(!text) {
		alert("ToDo Field is empty");
		return;
	}
	if(edit.childNodes[1].value){
		text += ' by ' + edit.childNodes[1].value;
	}
	var newToDo = document.createTextNode(text);
	edit.parentElement.replaceChild(newToDo,edit);
}

function markAsEdit(event){
	var todo = event.target.parentElement.childNodes[0];
	console.log(todo.childNodes[0]);
	todo.className = '';

	var edit = document.createElement('div')

	var editToDo = document.createElement('input');
	editToDo.id = 'editToDo';
	editToDo.placeholder = 'Edit todo';
	edit.appendChild(editToDo)

	var editDueDate = document.createElement('input');
	editDueDate.placeholder = 'Edit duedate';
	edit.appendChild(editDueDate);

	var editBtn = document.createElement('button');
	editBtn.id = 'editBtn';
	editBtn.innerHTML = 'Add';
	editBtn.addEventListener('click', editDone);
	edit.appendChild(editBtn);

	todo.replaceChild(edit, todo.childNodes[0]);
	todo.className = 'todo';
	console.log(todo.parentElement.classList);
	todo.parentElement.id = 'toDoMain';
}


function addToDoList(){
	var toDoMain = document.createElement('div');
	toDoMain.className = 'toDoMain';

	var todo = document.createElement('div');
	todo.className = 'todo';
	var text = todoInput.value;
	if(!text) {
		alert("ToDo Field is empty");
		return;
	}
	if(dueDate.value){
		text += ' by ' + dueDate.value;
	}
	todo.appendChild(document.createTextNode(text));
	todoInput.value = '';
	dueDate.value = '';
	toDoMain.appendChild(todo);

	var todoProg = document.createElement('div');
	todoProg.className = 'todoProg';
	todoProg.appendChild(document.createTextNode('In Progress'));
	todoProg.addEventListener('click',markAsInProgress);
	toDoMain.appendChild(todoProg);


	var todoDone = document.createElement('div');
	todoDone.className = 'todoDone';
	todoDone.appendChild(document.createTextNode('Done'));
	todoDone.addEventListener('click',markAsDone);
	toDoMain.appendChild(todoDone);

	var todoEdit = document.createElement('div');
	todoEdit.className = 'todoEdit';
	todoEdit.appendChild(document.createTextNode('Edit'));
	todoEdit.addEventListener('click',markAsEdit);
	toDoMain.appendChild(todoEdit);

	var todoX = document.createElement('div');
	todoX.className = 'todoX';
	todoX.appendChild(document.createTextNode('Del'));
	todoX.addEventListener('click',markAsX);
	toDoMain.appendChild(todoX);

	toDoList.appendChild(toDoMain);
}

function deleteToDoLists(){
	toDoList.innerHTML = '';
}

addButton.addEventListener("click", addToDoList);
deleteAll.addEventListener("click", deleteToDoLists);