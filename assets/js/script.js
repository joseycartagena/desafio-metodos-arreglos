const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevoTarea")
const btnSumar = document.querySelector("#agregarTarea")
const contarTareas = document.querySelector("#cuenta-tareas")
const tareas = []


function renderTareas(){
    let html = ""
    for (let tarea of tareas) {
      html += `<li>${tarea.id} ${tarea.mision} <button onclick="borrar(${tarea.id})"> X </button></li>`;
    }
    listaDeTareas.innerHTML = html;
    actualizarConteo();
    }

btnSumar.addEventListener("click", () => {
const nuevoTarea = tareaInput.value
tareas.push({id: Date.now(), mision: nuevoTarea})
tareaInput.value = ""
renderTareas()
})

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1)
renderTareas()
}
function actualizarConteo(){
contarTareas.textContent = `El número de tareas es: ${tareas.length}`
}

renderTareas();




