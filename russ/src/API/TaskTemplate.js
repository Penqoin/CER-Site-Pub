
function clearCurrTask()
{
    document.body.innerHTML = "";
}

function taskTemplate(
    taskDiv,
    taskHint 
) {
    const container = document.createElement("div");
    container.classList.add("task-container");

    const helpButton = document.createElement("a");
    helpButton.innerText = "Hjelp"
    helpButton.classList.add("task-help-button");
    
    const hint = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = taskHint;
    
    hint.appendChild(p);
    hint.classList.add("hidden");
    hint.classList.add("hint-display");

    helpButton.onclick = () => {
        hint.classList.contains("hidden") ? hint.classList.remove("hidden") : hint.classList.add("hidden");
    };
    
    container.appendChild(taskDiv);
    container.appendChild(helpButton);
    container.appendChild(hint);

    document.body.appendChild(container);
};

export { taskTemplate, clearCurrTask };
