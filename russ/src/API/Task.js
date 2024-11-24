/*
 * Struct for how to create tasks
 *
 * taskDiv is just a div that you create which acts like a container for the task.
 * allows the developer to freely customize the task as he whishes
 *
 * task hint is the string that will be displayed to the user when
 * he presses the hint button.
 *
 * taskFunc is an object which should ONLY contain 1 submethod, namely f which is a void function.
 * This design choice is hacky at best, but we don't have much of a choice. the function f should be
 * inside of the conditional inside of your task.
 *
 * the reason for it having to be an object is because we want it to be passed by refrence. Such 
 * that we can change the function f inside the conditionl to redirect to the next task. So f is 
 * a placeholder for what will be a redirect to the next task.
 * 
 * examples under oppgaver folder
 */

class Task
{
    taskDiv;
    taskHint;
    taskFunc;
    
    /*
     * @param taskDiv {HTMLelement.div} // container for task
     * @param taskHint {string} // the hint you wish to write to the user
     * @param taskFunc {Object} { f: () => void } // object variable with method f which is a void function
     */

    constructor(
        taskDiv,
        taskHint,
        taskFunc
    )
    {
        this.taskDiv = taskDiv;
        this.taskHint = taskHint;
        this.taskFunc = taskFunc;
    }
}

export { Task };
