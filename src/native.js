import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asynBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let state = 0;

function render() {
    counter.innerHTML = state;
}

addBtn.addEventListener('click', () => {
    state++;
    render();
});

subBtn.addEventListener('click', () => {
    state--;
    render();
});

asynBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++;
        render();
    }, 2000);
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

render();