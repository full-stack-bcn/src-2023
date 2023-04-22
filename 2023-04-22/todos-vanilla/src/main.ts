import "./style.css";

type TodoItem = {
  tarea: string;
  hecha: boolean;
};

let todoList: Array<TodoItem> = []; // <-- Modelo!!!

const pintarModelo = () => {
  // Esto genera el DOM necesario para visualizar el modelo
  const listElem = document.querySelector<HTMLOListElement>("#todo-list")!;
  listElem.textContent = null; // Vaciar un elemento del DOM

  for (const todoItem of todoList) {
    const item = document.createElement("li");

    // Creamos checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoItem.hecha;
    item.appendChild(checkbox);

    // Descripción tarea
    const tareaElem = document.createElement("span");
    tareaElem.textContent = todoItem.tarea;
    if (todoItem.hecha) {
      tareaElem.classList.add("checked");
    }
    item.appendChild(tareaElem);

    // Botón de borrar tarea
    const borrar = document.createElement('div');
    borrar.innerHTML = '&times;'
    borrar.classList.add('boton-borrar');
    borrar.addEventListener("click", borrarItem(todoItem));
    item.appendChild(borrar);

    // Click al item
    item.addEventListener("click", marcarItem(todoItem));

    listElem.appendChild(item);
  }
};

const añadeItem = () => {
  const input = document.querySelector<HTMLInputElement>("#texto")!;
  if (input.value !== "") {
    todoList.push({ tarea: input.value, hecha: false }); // Actualizar modelo
    pintarModelo();
    input.value = "";
    console.log(todoList);
  }
};

const marcarItem = (todoItem: TodoItem) => () => {
  todoItem.hecha = !todoItem.hecha;
  pintarModelo();
}

const borrarItem = (todoItem: TodoItem) => () => {
  todoList = todoList.filter(it => it !== todoItem);
  pintarModelo();
}

const borrarMarcados = () => {
  todoList = todoList.filter(x => !x.hecha);
  pintarModelo();
}

const borrarTodos = () => {
  todoList = [];
  pintarModelo();
}

const programarEventos = () => {
  let form = document.querySelector<HTMLFormElement>("form")!;
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    añadeItem();
  });

  let btnBorrarMarcados = document.querySelector<HTMLButtonElement>('#borrar-marcados')!;
  btnBorrarMarcados.addEventListener('click', borrarMarcados);

  let btnBorrarTodos = document.querySelector<HTMLButtonElement>('#borrar-todos')!;
  btnBorrarTodos.addEventListener('click', borrarTodos);
};

document.addEventListener("DOMContentLoaded", programarEventos);
