let form = document.querySelector("form");
let input = document.querySelector("input");

let listGroup = document.querySelector("ul")


form.addEventListener("submit" , saveTodo)

function saveTodo(e){
    e.preventDefault()
    
    let todo = document.createElement("list")

    todo.className = "list-group-item p2 mb3 rounded-2"
    todo.innerText = input.value
console.log(todo)

    let delBtn = document.createElement("button")
    delBtn.innerText = "X"
    delBtn.className = "btn btn-primary btn-sm rounded-5 float-end "
    todo.appendChild(delBtn);
    listGroup.appendChild(todo)

    form.reset()
}
listGroup.addEventListener("click" , delTodo)
function delTodo(e){
    if(e.target.className.includes("btn")){
        let del = e.target.parentElement
        listGroup.removeChild(del)
    }
}