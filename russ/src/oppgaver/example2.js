import { Task } from "../API/Task.js";

const code = "hello world"
const div = document.createElement('div');
div.innerText = "hello world";

const func = {
    f: () => {}
}

const inp = document.createElement('input');
inp.addEventListener('input', (e) => {
    if (e.target.value === code) {
        func.f();
    }
})

div.appendChild(inp);

const example2 = new Task(div, "hello world", func);
export { example2 };
