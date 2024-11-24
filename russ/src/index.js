import { Task } from "./API/Task.js";
import { TaskState } from "./API/TaskState.js";
import { example1 } from "./oppgaver/example1.js";
import { example2 } from "./oppgaver/example2.js";

const GAME = new TaskState();

document
    .getElementById("start-button")
    .addEventListener('click', () => {
        console.log("starting");
        GAME.init();
    })


window.addEventListener("DOMContentLoaded", () => {
    GAME.addTask(example1);
    GAME.addTask(example2);
})
