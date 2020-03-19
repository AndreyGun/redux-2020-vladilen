import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';

import './styles.css'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asynBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// middleware Это функция которая принимает в себя state
// function logger(state) {
//     return function(next) {
//         return function(action) {
//             console.log('state', state);
//             console.log('action', action);
//             return next(action);
//         }
//     }
// }

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

addBtn.addEventListener('click', () => {
    store.dispatch( increment() );
});

subBtn.addEventListener('click', () => {
    store.dispatch( decrement() );
});

asynBtn.addEventListener('click', () => {
    store.dispatch( asyncIncrement() );
});
/*
ИЛИ ТАК

function render() {
    counter.textContent = store.getState();
}

store.subscribe( render );
render()
*/
themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') 
    ? 'dark'
    : 'light';

    store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [ addBtn, subBtn, themeBtn, asynBtn ].forEach(btn => {
        btn.disabled = state.theme.disabled
    });

});

store.dispatch({type: 'INITIAL_VALUE'});