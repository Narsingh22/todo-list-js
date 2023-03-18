let todoList = [];
console.log(typeof todoList);

console.log(todoList);

let todoItems = document.getElementById("todo-item");
console.log(todoItems);
let addBtn = document.getElementById("add-btn");
console.log(addBtn);
let addedItems = document.getElementById("items");
console.log(addedItems);

addBtn.addEventListener('click', function () {
    todoList.push(todoItems.value);
    todoItems.value = "";
    renderItems();
});

function renderItems(){
    let listItems = "";
    
    let crossMark = document.createElement("button");
    crossMark.textContent = 'x';
    addedItems.append(crossMark);
    console.log(crossMark);

    let checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    addedItems.append(checkBox);
    console.log(checkBox);
    
    for (let i = 0; i < todoList.length; i++) {
        listItems += `<li>
                        ${checkBox} 
                        ${todoList}
                        ${crossMark}
                      </li>`;
    }
    addedItems.innerHTML = listItems;
}

function renderTodoItems(){
    renderItems();
}