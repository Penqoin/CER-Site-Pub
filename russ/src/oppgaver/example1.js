import { Task } from "../API/Task.js";

const div = document.createElement('div');
div.innerText = "hello world";
const func = {
    f: () => {}
}

div.addEventListener('click', () => {
    console.log('clicked')
    func.f();
})

const example1 = new Task(div, "hello world", func);

export { example1 };
