import { clearCurrTask, taskTemplate } from "./TaskTemplate.js";

class TaskState
{
    constructor()
    {
        this.#tasks = [];
    }

    init()
    {
        this.#update(0);
    }

    addTask(task)
    {
        const c = this.#tasks.length
        this.#tasks.push(task);
        task.taskFunc.f = () => {
            this.#update(c + 1);
        }
    }

    // private
    #tasks;
    #update(taskID)
    {
        if (taskID === this.#tasks.length)
        {
            console.log("you finished") 
        }
        else if (taskID > -1 && taskID < this.#tasks.length)
        {
            clearCurrTask();
            taskTemplate(this.#tasks[taskID].taskDiv, this.#tasks[taskID].taskHint);
        }
    }
};

export { TaskState };
