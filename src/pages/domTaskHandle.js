import { taskArray } from "./createTask";
import "./taskCards.css";

export const loadDomTaskHandle = function () {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    taskArray.length = 0;
    taskArray.push(...storedTasks);
  }

  const display = document.querySelector(
    ".display-container > div:last-of-type"
  );
  display.innerHTML = "";

  const taskCardsHolder = document.createElement("div");
  taskCardsHolder.classList.add("task-cards-holder");

  for (let task of taskArray) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `<h3>${task.title}</h3>
    <p><strong>Description:</strong> ${task.description}</p>
    <p><strong>Due:</strong> <span>${task.dueDate}</span></p>
    <p><Strong>Project:</strong> <span>${task.project}</span></p>
    <p><strong>Priority:</strong> <span>${task.priority}</span></p>`;

    taskCardsHolder.append(taskCard);
    display.append(taskCardsHolder);
  }
};
