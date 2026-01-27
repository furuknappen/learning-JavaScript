const todoList = [];

function addTodo(text) {
  const newTodo = {
    text: text,
    completed: false,
  };

  todoList.push(newTodo);
  return newTodo; 
  // spør BK
}

function markComplete(i) {
  todoList[i].completed = true;
}

function removeItem(index) {
  todoList.splice(index, 1);
}
// console.log(addTodo("spise"));
// console.log(addTodo("vaske"));
// console.log(addTodo("rydde"));
// console.log(addTodo("spille"));
addTodo("spise");
addTodo("vaske");
addTodo("rydde");
addTodo("spille");
markComplete(3);
markComplete(1);

// addTodo();
// console.log(todoList);

// function displayTodos() {
//   console.log(" ");
//   console.log("My todolist:");
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].completed) {
//       console.log("[x] " + todoList[i].text);
//     } else {
//       console.log("[ ] " + todoList[i].text);
//     }

//   }
// }

// Add a parameter called filter (e.g., displayTodos(filter)).
// function displayTodos(filter) {
// console.log(" ");
// console.log("My todolist:");

// Add logic so that if the filter argument is the string “completed”,
// it only displays the completed tasks;
// if the filter is “incomplete”,
// it only displays the incomplete tasks.

// If no filter is provided, it should display all tasks as before.

// if (filter === "complete" && todoList.complete === true) {
// for (let i = 0; i < todoList.length; i++) {
//   // const completedTasks = todoList[i].completed === true;
//
// }
//  console.log("[x] " + todoList.name);
// }

// if (filter === "incomplete") {
// }

// if (filter === null) {
//   for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].completed) {
//       console.log("[x] " + todoList[i].text);
//     } else {
//       console.log("[ ] " + todoList[i].text);
//     }
//   }
// }

// if(filter === "complete") {
//   const completedTodos = todoList.completed
//   console.log("[x] "+ completedTodos + todoList[i].text);

// }
// }

function displayTodos(filter) {
  console.log(" ");
  console.log("My todolist (" + filter + "):");

  if (filter === "complete") {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        console.log("[x] " + todoList[i].text);
      }
    }
  }

  if (filter === "incomplete") {
    for (let i = 0; i < todoList.length; i++) {
      if (!todoList[i].completed) {
        console.log("[ ] " + todoList[i].text);
      }
    }
  }

  if (filter === null) {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        console.log("[x] " + todoList[i].text);
      } else {
        console.log("[ ] " + todoList[i].text);
      }
    }
  }
}
displayTodos("complete");
displayTodos("incomplete");
displayTodos(null);
displayTodos("cat");

// removeItem(3);

// markComplete(1);

// markComplete(3);
// displayTodos();

// function removeTodo(i){
//   delete todoList[i];
// }

// removeTodo(3);
// console.log(addTodo("gå"));
// displayTodos();
console.log(addTodo("gå"));