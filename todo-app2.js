

const todoList = [];

function addTodo(text) {
  const newTodo = {
    text: text,
    completed: false,
  };

  todoList.push(newTodo);
  return newTodo;
}

function displayTodos() {
  console.log(" ");
  console.log("My todolist:");
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].completed) {
      console.log("[x] " + todoList[i].text);
    } else {
      console.log("[ ] " + todoList[i].text);
    }

    // console.log( i + 1 + ". " + todoList[i].text)
  }
}

function markComplete(i) {
  todoList[i].completed = true;
}

function onDisplayClick() {
  displayTodos();
}

function onAddClick() {
  // valuen i inputen addes til lista
  const text = document.getElementById("addItemInput").value

  if(text === ""){
    return
  }

  addTodo(text);
  renderList();
  displayTodos();
}

function addToHtmlList(todo) {
  //  add text to html list
 const list = document.getElementById("todoList");
 const item = document.createElement("li");
 item.textContent = todo.text

 if (todo.completed)
  {item.style.textDecoration = 'line-through'}
 
 list.appendChild(item)
}

function renderList(){
  // delete all items in html list
  // for each array item add to list
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    addToHtmlList(todoList[i])
  }

}




// console 
displayTodos();

addTodo("spise");
addTodo("vaske");
addTodo("rydde");
addTodo("spille");

displayTodos();

markComplete(1);
markComplete(3);

displayTodos();


renderList()