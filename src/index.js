import './styles.css'
import { createStore } from "redux";
import { rootReducer } from './redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asynBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
});

asynBtn.addEventListener('click', () => {

});

function render() {
    counter.textContent = store.getState();
}

store.subscribe( render );
render()
/*
ИЛИ ТАК
store.subscribe(() => {
    counter.textContent = store.getState();
});
store.dispatch({type: 'INITIA:_VALUE'});
*/
themeBtn.addEventListener('click', () => {
    //document.body.classList.toggle('dark');
});
