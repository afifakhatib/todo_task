const cl = console.log

const todoForm = document.getElementById('todoForm');
const todoControl = document.getElementById('todo');
const todoContainer = document.getElementById('todoContainer');

let todoList = [];

const tempalatingList = (arr) => {

    let skills = `<ul class="list-group">`;
    arr.forEach(skill => skills += `<li class="list-group-item">${skill}</li>`);
    skills += `</ul>`;
     todoContainer.innerHTML = skills;
}

const onTodosubmit = (e) => {
    e.preventDefault();
    let todo = todoControl.value;
    //cl(todo);
    todoList.push(todo);
    cl(todoList);

    tempalatingList(todoList)
    
    Swal.fire({
        title: `New skill added as new todo!!!`,
        text : 'Do your best for todo task',
        timer : 2500,
        icon: "success"
      });
    // todoForm.reset();
    e.target.reset();
}  


todoForm.addEventListener("submit" , onTodosubmit)
