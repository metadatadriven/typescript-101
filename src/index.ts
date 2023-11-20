import  {v4 as uuidV4} from "uuid"
// there are no types built into uuid so we needed to install @types/uuid


// Create local types
type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

// Get elements from html page
// note we are specifying the types 
const list = document.querySelector<HTMLUListElement>("#list")
const input = document.querySelector<HTMLInputElement>("#new-task-title")

// the getElementById function cannot take a type (I think because it returns
// a specific HTMLElement type not a generic Element???)
// so we use TS type casting (as) ALSO it can be Null
const form = document.getElementById("new-task-form") as HTMLFormElement | null

// create an array of task items to act as a storage for all tasks
// this is a list of type Task that is initiaited empty
const tasks: Task[] = loadTasks()

// (re)create all the tasks in the UU
tasks.forEach(addLIstItem);

form?.addEventListener("submit", e => {
  e.preventDefault()

  // quit early if no input
  if (input?.value == "" || input?.value == null) return 

  // we do have input here..
  //..create a task object
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  // store the new task in the task list
  tasks.push(newTask)
  saveTasks()
  
  // add the task to the list
  addLIstItem(newTask)

  // clear the input value after tasks  is created
  input.value = ""
})

// define a function that adds a task object to the UI
function addLIstItem(task: Task) {
  const  item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  // add a UI event listener that toggles the task object completed property
  checkbox.addEventListener("change", e => {
    task.completed = checkbox.checked
    saveTasks()
  })
  // now construct the task ui elements
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks() : Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}